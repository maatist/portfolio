echo "Cambiamos a rama master"
git checkout main

echo "Armando app..."
npm run build

echo "Deployeando archivos al server..."
scp -i ./portafolio.pem -r dist/* ubuntu@52.67.85.190:/var/www/portfolio/


echo "Listo!"