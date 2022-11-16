#react icons install command
- npm install react-icons

#start queues
- cd backend && php artisan queue:work
- npx prettier --write .

#run prettier: prettier resources --write
#run laravel: php artisan serve

Add a column into an existing table:
#php artisan make:migration add_email_notification_to_ricorsis_table --table=ricorsis
#per utilizzare le queue usa i seguenti comandi:
php artisan queue:table
php artisan migrate
php artisan serve

In order to use the database queue driver, you will need a database table to hold the jobs. To generate a miration:
#php artisan queue:table

Permission to access a folder on Ubuntu, remember that you need to restart the nginx:
#chmod -R 777 resources/pending-files/
#sudo service nginx restart 
#sudo nginx -t

<!-- Quest'ultima migrazione è per i failed jobs -->
Per indicizzare un modello in laravel scout:
#php artisan scout:import "App\Models\Cartoline"
#php artisan queue:work
If you the queue slows down change the memory_limit in the php.ini from 128M to 512M

Commando per creare un modello con la migrazione:
#php artisan make:model Task -m

Commando per creare un email di Notifica:
#php artisan make:notification TaskReminderNotification

Commando per creare user amministratore:
#php artisan user:makeUserRevisor
Commando per creare un commando custom
#php artisan make:command SendTaskReminderCommand

Custom command
#php artisan task_reminders:send

Command to run a cron job locally:
to run it locally
#php artisan schedule:work

Clear cache.
#php artisan cache:clear 
#php artisan config:cache 
#php artisan optimize:clear 
#php artisan route:clear 

Run this command on the server for the cron job:
In the server run this command: 
#sudo crontab -e

And then add this line of code in the crontab
#\* \* \* \* \* && php artisan schedule:run >> /dev/null 2>&1n

Command to make user Reviser:
#php artisan make:command MakeUserRevisor

Get all the fase by group
#$dateOfDeposit = Fasi::all()->groupBy('data_deposito_sentenza'); 

Indirizzo ip progetto ricorso
#http://172.16.6.43/login

#Commando per installare la libreria per importare/exportare file csv/excel
composer require psr/simple-cache:^1.0 maatwebsite/excel

Commando per creare classi import/export
php artisan make:import CartolineImport --model=Cartoline

Get a week before date in seconds, get a week in seconds, and the current date;
#dd(strtotime('-1 week') , (60 * 60 * 24 * 7), strtotime(Carbon::now()));

