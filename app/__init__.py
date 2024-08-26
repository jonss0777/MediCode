from flask import Flask 
from flask_socketio import SocketIO
from .config import Config
from .routes import routes
from .sockets import register_socket_io_events

socketio = SocketIO()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize Socket.IO
    socketio.init_app(app)

    # Import and register blueprints
    app.register_blueprint(routes.bp)
    
    # Registe Socket.IO events
    register_socket_io_events(socketio)

    return app