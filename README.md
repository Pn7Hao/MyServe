# MyServe

**Universal Service Connection Platform**

A modern, responsive landing page designed to connect to universal services, starting with a fully functional Todo Website.

## Features

### 🎯 Landing Page
- **Beautiful Design**: Modern gradient design with glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Service Cards**: Extensible design for adding new services
- **Universal Connection**: Built to easily integrate with external services

### ✅ Todo Manager
- **Full CRUD Operations**: Add, edit, delete, and complete tasks
- **Smart Filtering**: Filter tasks by All, Active, or Completed
- **Local Storage**: Persistent data storage in browser
- **Task Counter**: Real-time count of remaining tasks
- **Clean UI**: Intuitive and user-friendly interface
- **Animations**: Smooth transitions and hover effects

### 🔌 Service Integration
- **Universal API**: Built-in ServiceConnector for connecting to external services
- **Extensible**: Easy to add new services to the platform
- **Future-Ready**: Prepared for connecting to various APIs and services

## Screenshots

### Landing Page
![Landing Page](https://github.com/user-attachments/assets/c86d6749-1c25-4e07-ab62-e84d8ac0b1fb)

### Todo Manager
![Todo Manager](https://github.com/user-attachments/assets/0caeeffc-37ae-44e8-bafb-25854f692977)

## Getting Started

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/Pn7Hao/MyServe.git
   cd MyServe
   ```

2. Start a local server:
   ```bash
   # Using Python (recommended)
   python3 -m http.server 8000
   
   # Or using npm (if you prefer)
   npm start
   
   # Or using Node.js
   npx http-server
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### File Structure
```
MyServe/
├── index.html          # Main landing page
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript functionality and service connector
├── package.json        # Project configuration
└── README.md          # This file
```

## Usage

### Using the Todo Manager
1. Click "Launch Todo App" on the landing page
2. Add tasks using the input field and "Add Task" button
3. Check off completed tasks by clicking the checkbox
4. Filter tasks using All, Active, or Completed buttons
5. Delete individual tasks with the "Delete" button
6. Clear all completed tasks with "Clear Completed"
7. Return to services with "← Back to Services"

### Adding New Services
The platform is designed to be extensible. To add new services:

1. Add a new service card in `index.html`:
   ```html
   <div class="service-card">
       <h3>Your Service Name</h3>
       <p>Service description</p>
       <button class="service-btn" onclick="showYourService()">Launch Service</button>
   </div>
   ```

2. Create the service section in HTML
3. Add corresponding JavaScript functions
4. Use the `ServiceConnector` API for external integrations

### Service Connector API
The built-in ServiceConnector provides methods for universal service integration:

```javascript
// Connect to an external service
ServiceConnector.connectToService('ServiceName', config)
    .then(result => console.log('Connected:', result));

// Register a new service
ServiceConnector.registerService(serviceConfig);

// Get available services
const services = ServiceConnector.getAvailableServices();
```

## Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **LocalStorage API**: Persistent data storage
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Development

### Running Locally
```bash
# Clone the repository
git clone https://github.com/Pn7Hao/MyServe.git
cd MyServe

# Start development server
npm run dev
# or
python3 -m http.server 3000
```

### Project Structure
- **index.html**: Main application structure
- **styles.css**: All styling including responsive design
- **script.js**: Application logic and service integration
- **package.json**: Project metadata and scripts

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Add more service integrations
- [ ] Implement user authentication
- [ ] Add note-taking service
- [ ] Add calendar integration
- [ ] Dark mode toggle
- [ ] Export/import functionality
- [ ] Real-time sync across devices

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Repository: [https://github.com/Pn7Hao/MyServe](https://github.com/Pn7Hao/MyServe)
- Issues: [https://github.com/Pn7Hao/MyServe/issues](https://github.com/Pn7Hao/MyServe/issues)

---

**MyServe** - Your universal gateway to connected services 🚀