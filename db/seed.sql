USE cms_db; -- Using employee_db created in schema

INSERT INTO department (name) VALUES -- Inserting department values from walkthrough example
  ('Entertainment'),
  ('Agent'),
  ('PR'),
  ('Molder'),
  ('Mod');

INSERT INTO role (title, department_id, salary) VALUES -- Inserting role values from walkthrough example
  ('Streamer', 1, 80000), --1
  ('Content-Creator', 1, 80000), --2
  ('Editor', 1, 55000), --3
  ('Agency Contant', 2, 120000), --4
  ('Streamer Representative', 2, 160000), --5
  ('Creator Contant', 2, 120000), --6
  ('Sceduler', 3, 50000), --7
  ('3D Molder/Rigger', 4, 60000), --8
  ('2D Molder/Rigger', 4, 60000), --9
  ('LiveStream Mod', 5, 30000), --10
  ('Video Comment Mod', 5, 25000); --11

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES -- Inserting employee values from walkthrough example
  ('Girl', 'Dm', 1, NULL),
  ('Gawr', 'Gura', 1, NULL),
  ('Mark', 'Fishbach', 2, NULL),
  ('Sean', 'McLoughlin', 2, NULL),
  ('Haru', 'Okumura', 4, NULL),
  ('Futaba', 'Sakura', 3, 5),
  ('Tanjiro', 'Kamado', 5, 1),
  ('Shōta', 'Aizawa', 5, 2),
  ('Din', 'Djarin', 6, 3),
  ('John', 'Wick', 6, 4),
  ('Makoto', 'Niijima', 6, 7),
  ('Ann', 'Takamaki', 8, 6),
  ('Yusuke', 'Kitagawa', 9, 6),
  ('Ryugi', 'Sakamoto', 10, 5),
  ('Giyu', 'Tomioka', 11, 5);
