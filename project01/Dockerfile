# Step 1: Base Image
FROM nginx:latest

# Step 2: Work Directory
WORKDIR /usr/share/nginx/html

# Step 3: Copy Content
COPY . .

# Step 4: Expose Port
EXPOSE 80

# Step 5: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
