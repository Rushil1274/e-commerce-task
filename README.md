# e-commerce-task
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>E-Commerce Task - Setup Guide</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: auto;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            font-family: Consolas, monospace;
        }
    </style>
</head>
<body>
    <h1>E-Commerce Task</h1>
    
    <h2>Setup the Backend</h2>
    <p>Follow these steps to set up the backend:</p>
    <pre>
        <code>
        cd backend
        py -3.10 -m venv venv
        source venv/bin/activate  # On Windows: venv\Scripts\activate
        pip install -r requirements.txt
        pip install --upgrade flask
        pip install --upgrade flask-sqlalchemy
        python app.py
        </code>
    </pre>
    <p>The backend server will start on <a href="http://localhost:5000">http://localhost:5000</a></p>
    
    <h2>Setup the Frontend</h2>
    <p>Follow these steps to set up the frontend:</p>
    <pre>
        <code>
        cd frontend
        npm install
        npm start
        </code>
    </pre>
    <p>The frontend development server will start on <a href="http://localhost:3000">http://localhost:3000</a></p>
    
    <h2>Alternative: Create a React App</h2>
    <pre>
        <code>
        npx create-react-app frontend
        cd frontend
        npm install axios bootstrap
        npm install
        npm start
        </code>
    </pre>
    </body>
</html>


