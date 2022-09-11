
    git clone https://github.com/camilapensolvers/GitHubBrai99chavez-Ensolvers-Challenge.git
    cd GitHubBrai99chavez-Ensolvers-Challenge

    cd back
    npm i 
    touch .env
    echo ------------------------------------------
    echo "(ingresar contraseña era un requisito obligatorio al instalar postgres)"
    read -p "Ingresa la DB_PASSWORD: " DB_PASSWORD
        echo ------------------------------------------
        echo "(si no puso un usuario en postgres entonces su usuario default es postgres)"
    read -p "ingresa su DB_USER: " DB_USER
       echo ------------------------------------------
       echo "(el puerto en que trabajamos localmente es localhost, asi que ingrese localhost)"
    read -p "ingresa su DB_HOST: " DB_HOST
      echo ------------------------------------------
       echo "(ingresar el nombre de la base de datos de postgreSQL a utilizar)"
   read -p "ingresa su DB_NAME: " DB_NAME
       echo ------------------------------------------
    printf "DB_PASSWORD= $DB_PASSWORD \nDB_USER= $DB_USER \nDB_HOST= $DB_HOST \nDB_NAME= $DB_NAME" > .env
    cd ..
    cd front
    npm i 
 



