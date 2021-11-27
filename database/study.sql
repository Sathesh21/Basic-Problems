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
CREATE TABLE branch_details(S_no int ,Branch_location varchar, Renewed_in ,Licence_issued tinyint);


--DATATYPE -> they are used to identify the datatype of the data stored.It also varies for same datatype depending upon the length of it.
--Types 
--  Number * int- for low values in length.
--         * DOUBLE - for moderate values in length.
--         * LONG - for long values in length.
--         * BIGINT 
--         * TINYINT 

--  Sting  * varchar
--         * char
--         * Text

-- Boolean * Tinyint

-- date    * TIMESTAMP
