include ./client/.env
export
# target: 
#     @echo "test0"
#     @echo "test1"
help: ## serve for development
	@echo "Usage: make [options] [target] ..."; \
	echo "Targets:"; \
	fgrep -h '##' Makefile | awk -F'##|: ' '{printf "%40s %s\n", $$1, $$3}
	' | fgrep -v fgrep';

freshdb: ## reset db
	@echo "Reset DB"
	@cd server && php artisan migrate:fresh && php artisan passport:install --force
	
dev: ## serve for development
	@echo "starting Dev enviroment"
	@cd client && npm run start &
	@cd server && php artisan serve --port=8000

install: ## performs initial setup
	@echo "Installing libraries"
	@cd server && composer update && composer install && cp .env.example .env
	@cd client && npm install
	
i: ## performs initial setup
	@echo "Installing libraries"
	@cd server && composer update && composer install
	@cd client && npm install

prettier: ##prettier
	@echo "lunch prettier"
	@cd client && npx prettier --write . &
	@cd server && npx prettier --write . 

clearCache: ## to clear the cache
	@echo "clear cache"
	@cd server && php artisan cache:clear && php artisan config:cache && php artisan route:clear

queueWork: #start queues command
	@echo "queue:work"
	@cd server && php artisan queue:work

scheduleWork: ##
	@echo "schedule:work"
	@cd server && php artisan schedule:work

