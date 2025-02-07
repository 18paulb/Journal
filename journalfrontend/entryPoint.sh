!/bin/bash
set -e
 
sed -i "s/uniqueValue/${NEXT_PUBLIC_JWT_TOKEN}/g" .env.production
 
exec "$@"