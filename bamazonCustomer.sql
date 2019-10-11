CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT primary key,
product_name VARCHAR(30),
department_name VARCHAR(30),
price INT,
stock_quantity INT
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Book', 'School', '500','3');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Computer', 'School', '1100','5');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bean Bag', 'House', '25','20');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Microwave', 'Kitchen', '120','3');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Microwave', 'Kitchen', '120','3');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Refrigerator', 'Kitchen', '2000','5');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Xbox', 'Games', '400','10');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Supreme Shirt', 'Apparel', '1500','1');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Candle', 'House', '15','20');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Fan', 'House', '125','10');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Soccer Ball', 'Sports', '30','7');

SELECT * FROM products
