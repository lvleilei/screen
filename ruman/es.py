#!/usr/bin/env python
#coding: utf-8
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
from elasticsearch import Elasticsearch
from time_utils import *
import pymysql as mysql
import pymysql.cursors

from config import *
from db import get_stock

es = Elasticsearch([{'host':ES_HOST,'port':ES_PORT}])

def defaultDatabase():
	conn = mysql.connect(host=SQL_HOST,user=SQL_USER,password=SQL_PASSWD,db=DEFAULT_DB,charset=SQL_CHARSET,cursorclass=pymysql.cursors.DictCursor)
	conn.autocommit(True)
	cur = conn.cursor()
	return cur

def get_stock(id):
	cur = defaultDatabase()
	stocksql = "SELECT * FROM %s WHERE %s = '%s'" %(TABLE_DAY,DAY_ID,id)
	cur.execute(stocksql)
	thing = cur.fetchone()
	dic = {DAY_STOCK_ID:thing[DAY_STOCK_ID],DAY_START_DATE:thing[DAY_START_DATE],DAY_END_DATE:thing[DAY_END_DATE],DAY_INDUSTRY_CODE:thing[DAY_INDUSTRY_CODE]}
	return dic

def manipulateAnnouncement(id):   #展示操纵期内公告详情
	stock = get_stock(id)
	stock_id = stock[DAY_STOCK_ID]
	start_time = datetimestr2ts(stock[DAY_START_DATE])
	end_time = datetimestr2ts(stock[DAY_END_DATE])
	query_body = {"size":2000,"query":{ "filtered": {
		"query":{"match":{"stock_id":stock_id}},
		"filter":{"range":{"publish_time":{"gte": start_time,"lte": end_time}}}
	}}}

	res = es.search(index=DIC_ANNOUNCEMENT['index'], doc_type=DIC_ANNOUNCEMENT['type'], body=query_body,request_timeout=100)
	hits = res['hits']['hits']
	result = []
	if(len(hits)):
		for item in hits:
			res = item['_source']
			a = res['type']
			if a == 1:
				announcement_type = u'并购重组'
			elif a == 2:
				announcement_type = u'对外投资'
			elif a == 3:
				announcement_type = u'股权质押'
			elif a == 4:
				announcement_type = u'大股东减持'
			elif a == 5:
				announcement_type = u'利润分配'
			elif a == 6:
				announcement_type = u'关联交易'
			elif a == 7:
				announcement_type = u'定向增发'
			elif a == 8:
				announcement_type = u'配股'
			elif a == 9:
				announcement_type = u'停牌'
			elif a == 10:
				announcement_type = u'高管辞职'
			else:
				announcement_type = u'其他'
			dic = {'publish_time':ts2datetimestr(res['publish_time']),'title':res['title'],'url':res['url'],'type':announcement_type}
			result.append(dic)
	return result

def manipulateLargetrans(id):   #展示大宗交易记录
	stock = get_stock(id)
	stock_id = stock[DAY_STOCK_ID]
	start_date = stock[DAY_START_DATE]
	end_date = stock[DAY_END_DATE]

	query_body = {"size":2000,"query":{ "filtered": {
		"query":{"match":{"stock_id":stock_id}},
		"filter":{"range":{"date":{"gte": start_date,"lte": end_date}}}
	}}}
	res = es.search(index=DIC_LARGE_TRANS['index'], doc_type=DIC_LARGE_TRANS['type'], body=query_body,request_timeout=100)
	hits = res['hits']['hits']

	result=[]
	if(len(hits)):
		for item in hits:
			res = item['_source']
			dic = {}
			dic['date'] = res['date']
			dic['price'] = res['transaction_price']
			dic['number'] = res['transaction_number']
			dic['amount'] = res['transaction_amount']
			dic['ratio'] = res['Discount_ratio']
			dic['buyer'] = res['Buyer']
			dic['seller'] = res['Seller']
			result.append(dic)
	result = sorted(result, key= lambda x:(x['date']), reverse=True)
	return result

if __name__=="__main__":
	print manipulateAnnouncement(14)