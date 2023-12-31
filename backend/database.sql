CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE categories (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  category VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE images (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  src VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE users (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE KEY,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  role INT(1) NOT NULL DEFAULT (0),
  created DATETIME NOT NULL DEFAULT NOW()
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE pastries (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  category_id INT UNSIGNED,
  image_id INT UNSIGNED NOT NULL,
  reference VARCHAR(255) NOT NULL,
  title TEXT NOT NULL,
  sizes VARCHAR(255),
  story TEXT,
  CONSTRAINT fk_pastries_categories FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT fk_pastries_images FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE favourites (
  user_id INT UNSIGNED NOT NULL,
  pastry_id INT UNSIGNED NOT NULL,
  CONSTRAINT pk_favourites PRIMARY KEY (user_id, pastry_id),
  CONSTRAINT fk_favourites_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT fk_favourites_pastries FOREIGN KEY (pastry_id) REFERENCES pastries(id) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO categories (category) VALUES ('Tout chocolat'), ('Diététique'), ('Aux fruits'), ('Traditionnel'); 

INSERT INTO users (email, password, firstname, lastname, role) VALUES ('p.martin@exemple.com', '$argon2id$v=19$m=65536,t=3,p=4$S7YA4XkGAEdGzBz1IJ3i0Q$6fnWCs/tF4iLT7k8LkQlZcxNpYIp9bGV31xsZJtKrZE', 'Pierre', 'MARTIN', 1), ('john.do@exemple.com', '$argon2id$v=19$m=65536,t=3,p=4$Uo1Erk71vxK9tyhCsbG2NA$2cR819Y0RWEBDbQwGdg3cd947F2n+SZISg/22Jdfw4U', 'John', 'DO', 0);

INSERT INTO images (src, description) VALUES ('chocolatecake1.jpg', 'Les trois chocolats'), ('chocolatecake2.jpg', 'Le chocolat dans tous ses états'), ('chocolatecake3.jpg', 'Le chocolat gourmand'), ('dietcake1.jpg', 'Le délice allégé'), ('dietcake2.jpg', 'Le sans sucre'), ('dietcake3.jpg', 'Petites douceurs légères'), ('fruitcake1.jpg', 'La Tarte aux fruits rouges'), ('fruitcake2.jpg', 'La Tarte à la crème'), ('fruitcake3.jpg', 'La tarte revisité'), ('traditionalcake1.jpg', 'La pâtisserie traditionnelle'), ('traditionalcake2.jpg', 'Les délices du chef'), ('traditionalcake3.jpg', 'La gourmandise authentique');

INSERT INTO pastries (category_id, image_id, reference, title, sizes, story) VALUES (1, 1, 'ref disponible', 'Les trois chocolats', 'part unique', 'Pâtisserie composée de chocolat noir exclusivement.'), (1, 2, 'ref disponible/en stock', 'Le chocolat dans tous ses états', 'part unique', 'Pâtisserie composée de chocolat blanc, noir et au lait associée aux noisettes.'), (1, 3, 'ref en stock', 'Le chocolat gourmand', 'part unique, existe en format 8 parts', 'Pâtisserie composée de chocolat aux lait.'), (2, 4, 'ref disponible', 'Le délice allégé', 'part unique, existe en format 8 parts', 'Pâtisserie allégé sans gluten.'), (2, 5, 'ref disponible', 'Le sans sucre', 'part unique', 'Pâtisserie sans sucre et sans gluten.'), (2, 6, 'ref disponible/en stock', 'Petites douceurs légères', 'part unique', 'Pâtisserie aux assortiments de douceurs légères.'), (3, 7, 'ref disponible', 'La Tarte aux fruits rouges', 'part unique', 'Pâtisserie aux fruits rouges.'), (3, 8, 'ref en stock', 'La Tarte à la crème', 'part unique', 'Pâtisserie à la crème de citron et agrumes.'), (3, 9, 'ref disponible en stock', 'La tarte revisité', 'part unique', 'Pâtisserie citronée agrémentée de groseilles.'), (4, 10, 'ref disponible en stock', 'La pâtisserie traditionnelle','part unique','Pâtisserie traditionnelle aux saveurs inimitables.'), (4, 11, 'ref disponible/en stock', 'Les délices du chef', 'part unique', 'Pâtisserie spécialité du chef.'), (4, 12, 'ref disponible', 'La gourmandise authentique', 'part unique', 'Pâtisserie authentique revisitée.');
