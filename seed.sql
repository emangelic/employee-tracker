USE employee-trackerDB;

INSERT INTO department (name) VALUES ("Software");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("HR");

INSERT INTO role (title, salary,department-id) VALUES ("Engineer, 100000, 1");
INSERT INTO role (title, salary,department-id) VALUES ("Engineer, 100000, 1");
INSERT INTO role (title, salary,department-id) VALUES ("Engineer, 100000, 1");
INSERT INTO role (title, salary,department-id) VALUES ("Engineer, 100000, 1");
INSERT INTO role (title, salary,department-id) VALUES ("Engineer, 100000, 1");

INSERT INTO employee (first-name, last-name, role-id) VALUES ("Hello", "Kitty", 1);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Kurom", "Mi", 1);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Pompom", "Purin", 2);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Cinna", "Morill", 2);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Kuro", "Pi", 3);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Retsuko", "Haida", 2);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Fenneko", "Fox", 3);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Tsunoda", "Mejika", 4);
INSERT INTO employee (first-name, last-name, role-id) VALUES ("Butoniko", "Ton", 5);