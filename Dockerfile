FROM python:3.9-slim

WORKDIR /app

# Install dependencies
COPY scripts/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend scripts and session files
COPY scripts/ .
# Ensure public/thumbnails exists
RUN mkdir -p public/thumbnails

# Expose port (Cloud Run sets PORT env var)
EXPOSE 8080

# Environment variables
ENV PORT=8080
ENV THUMBS_DIR=public/thumbnails

# Run the media server
CMD ["python", "media_server.py"]
