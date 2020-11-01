SELECT * FROM storage WHERE id in 
(SELECT max(id) as max_collection_id FROM storage GROUP BY id_collection
UNION SELECT max(id) as max_collection_id FROM storage WHERE id not in
(SELECT max(id) as id FROM storage GROUP BY id_collection)
GROUP BY id_collection order by max_collection_id);
