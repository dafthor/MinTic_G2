SELECT
  username,
  correo
FROM
  Usuarios
WHERE
  username REGEXP '[0-9]'
order by
  username asc;