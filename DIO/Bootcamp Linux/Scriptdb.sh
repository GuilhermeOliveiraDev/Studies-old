echo "Instalando atualizações."

apt-get update
apt-get upgrade -y

echo "Finalizado."

echo "Instalando Apache e UnZip."

apt-get install apache2 -y
apt-get install unzip -y

echo "Finalizado."

cd /tmp

echo "Baixando arquivos do Site."

wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip

echo "Finalizado."

echo "Descompactando arquivos."

unzip main.zip

echo "Finalizado."

cd linux-site-dio-main

echo "Copiando arquivos para a pasta do Servidor Apache."

cp -R * /var/www/html/

echo "Finalizado."

echo "O script foi executado com sucesso."