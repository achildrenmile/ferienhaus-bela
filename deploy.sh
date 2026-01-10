#!/bin/bash

#===============================================================================
# Ferienhaus Bela - Docker Deployment Script
#===============================================================================

set -e

# Configuration
APP_NAME="ferienhaus-bela"
IMAGE_NAME="ferienhaus-bela"
CONTAINER_NAME="ferienhaus-bela"
PORT=3333

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed and running
check_docker() {
    log_info "Checking Docker installation..."

    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install Docker first."
        exit 1
    fi

    if ! docker info &> /dev/null; then
        log_error "Docker daemon is not running. Please start Docker."
        exit 1
    fi

    log_success "Docker is installed and running."
}

# Stop and remove existing container
cleanup() {
    log_info "Cleaning up existing container..."

    if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        log_info "Stopping container: ${CONTAINER_NAME}"
        docker stop ${CONTAINER_NAME} 2>/dev/null || true

        log_info "Removing container: ${CONTAINER_NAME}"
        docker rm ${CONTAINER_NAME} 2>/dev/null || true

        log_success "Cleanup completed."
    else
        log_info "No existing container found."
    fi
}

# Build Docker image
build() {
    log_info "Building Docker image: ${IMAGE_NAME}..."

    docker build -t ${IMAGE_NAME}:latest .

    log_success "Docker image built successfully."
}

# Run container
run() {
    log_info "Starting container: ${CONTAINER_NAME} on port ${PORT}..."

    docker run -d \
        --name ${CONTAINER_NAME} \
        --restart unless-stopped \
        -p ${PORT}:${PORT} \
        ${IMAGE_NAME}:latest

    log_success "Container started successfully."
}

# Show status
status() {
    echo ""
    log_info "Container Status:"
    echo "----------------------------------------"

    if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        docker ps --filter "name=${CONTAINER_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
        echo ""
        log_success "Application is running at: http://localhost:${PORT}"
    else
        log_warning "Container is not running."
    fi
}

# Show logs
logs() {
    log_info "Showing logs for ${CONTAINER_NAME}..."
    docker logs -f ${CONTAINER_NAME}
}

# Stop container
stop() {
    log_info "Stopping ${CONTAINER_NAME}..."
    docker stop ${CONTAINER_NAME} 2>/dev/null || log_warning "Container not running."
    log_success "Container stopped."
}

# Restart container
restart() {
    log_info "Restarting ${CONTAINER_NAME}..."
    docker restart ${CONTAINER_NAME} 2>/dev/null || log_error "Container not found."
    log_success "Container restarted."
}

# Full deployment
deploy() {
    echo ""
    echo "=========================================="
    echo "  Ferienhaus Bela - Docker Deployment"
    echo "=========================================="
    echo ""

    check_docker
    cleanup
    build
    run
    status

    echo ""
    echo "=========================================="
    log_success "Deployment completed!"
    echo "=========================================="
}

# Show help
show_help() {
    echo ""
    echo "Ferienhaus Bela - Docker Deployment Script"
    echo ""
    echo "Usage: ./deploy.sh [command]"
    echo ""
    echo "Commands:"
    echo "  deploy    Full deployment (default) - build and run"
    echo "  build     Build Docker image only"
    echo "  start     Start the container"
    echo "  stop      Stop the container"
    echo "  restart   Restart the container"
    echo "  status    Show container status"
    echo "  logs      Show container logs (follow mode)"
    echo "  cleanup   Stop and remove container"
    echo "  help      Show this help message"
    echo ""
}

# Main script
case "${1:-deploy}" in
    deploy)
        deploy
        ;;
    build)
        check_docker
        build
        ;;
    start)
        check_docker
        run
        status
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        status
        ;;
    status)
        status
        ;;
    logs)
        logs
        ;;
    cleanup)
        cleanup
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        log_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac
