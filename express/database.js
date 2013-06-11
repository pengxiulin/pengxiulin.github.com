#!/usr/bin/env node
require('mongodb').connect('mongodb://xiulin.info/blog',function(err,conn){
    conn.collection('ips',function(err,coll){
	/*
	object_to_insert = { 'ip': '10.10.224.112', 'ts': new Date() };
	coll.insert(object_to_insert,{safe:true},function(err){
	    if(err){
		console.log(err);
	    }
	});
	*/
	coll.find({},{limit:10}).toArray(function(err,docs){
	    var l = docs.length;
	    for(var i = 0;i<l;i++){
		console.log(docs[i]);
	    }
	});
    });
});
