/* 
MySQL Study 
*/

-- MYSQL -> its a structured query language, it can have n number of databases
-- 

-- To create a database
--DATABASE -> it is used to store the data and retrival it , datas are stored in table .
-- Syntax CREATE DATABASE <database_name>;
CREATE DATABASE shopping_complex;


--To create a table 
--TABLE -> it contains rows and coloumns , where as coloum represents what is the datas .It cam also contain n number of rows and coloumns.
--Syntax CREATE TABLE <table_name>(coloumn-name1 datatype ,coloumn-name2 datatype,..);
CREATE TABLE branch_details(s_no int , branch_location varchar(100) , renewed_in timestamp , licence_issued tinyint);
CREATE TABLE branch_details ( s_no int unique auto_increment, branch_location varchar(100) , renewed_in timestamp , licence_issued tinyint );


--DATATYPE -> they are used to identify the datatype of the data stored.It also varies for same datatype depending upon the length of it.
--Types 
--  Number * int- for low values in length.
--         * DOUBLE - for moderate values in length.
--         * LONG - for long values in length.
--         * BIGINT 
--         * TINYINT 
-- int for special unique case can contain 'UNIQUE' ,it will make the values unique only.
--    "id int unique "
--int also can contain 'AUTO_INCREMENT' , where it will increment the value default and will not repeat the same value.

--  Sting  * varchar
--         * char
--         * Text

-- Boolean * Tinyint

-- date    * TIMESTAMP



-- after creating the table the VALUES is to be entered into the table 
-- INSERT INTO  <table_name> (C1 ,C2 , C3 )VALUES(V1 , V2 ,V3);
 INSERT INTO  branch_details (  branch_location , renewed_in , licence_issued) VALUES ('salem' ,  '2038-01-19 03:14:07' , 1 );
-- 
--to retrive the datas from the table either specific coloum or '*' represents all 
--SELECT  * FROM <table name>;
SELECT  * FROM  branch_details ;
SELECT branch_location FROM  branch_details ;
--
--to delete the specific row by using its coloumn name or by condition
--DELETE  FROM <table name> WHERE condition ;
DELETE  FROM branch_details WHERE s_no = 3 ;
--
--to change the datas of rows by using coloumn name
--UPDATE  <table name> set  col.name = 'old'  WHERE  col.name = 'new' ;
UPDATE  branch_details set  branch_location = 'mumbai'  WHERE  branch_location = 'kolkata' ;
--
--
-- to change the coloumn name from sno to id 
ALTER TABLE branch_details RENAME COLUMN  s_no  TO id  ;
 --
 --
 --to empty the table by deleting entire values , coloumn name alone remains here
TRUNCATE TABLE branch_details ;
--
--
--to drop the entire table , delete the whole table 
DROP TABLE branch_details;
