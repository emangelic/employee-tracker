USE employee-trackerDB;

INSERT INTO department (name) VALUES ("Software");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("HR");

INSERT INTO role (title, salary,department-id) VALUES ("Senior Engineer", 100000, 1);
INSERT INTO role (title, salary,department-id) VALUES ("Accountant", 75000, 2);
INSERT INTO role (title, salary,department-id) VALUES ("Lawyer, 200000, 3");
INSERT INTO role (title, salary,department-id) VALUES ("Social Media Manager", 100000, 4);
INSERT INTO role (title, salary,department-id) VALUES ("Copywriter", 100000, 3);
INSERT INTO role (title, salary,department-id) VALUES ("Advocate", 100000, 5);
INSERT INTO role (title, salary,department-id) VALUES ("Frontend Engineer", 100000, 1);


INSERT INTO employee (first_name, last_name, role_id) VALUES ("Hello", "Kitty", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kurom", "Mi", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Pompom", "Purin", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Cinna", "Morill", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kuro", "Pi", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Retsuko", "Haida", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Fenneko", "Fox", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Tsunoda", "Mejika", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Butoniko", "Ton", 5);