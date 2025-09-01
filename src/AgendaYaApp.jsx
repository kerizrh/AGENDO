import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, User, Plus, Menu, X, Check, ChevronRight, Smartphone, MessageSquare, Home, List, Settings, LogOut } from 'lucide-react';
import CalendarWidget from './components/Calendar';

const AgendaYaApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Consulta Médica - Dr. García',
      category: 'medica',
      date: '2024-12-15',
      time: '10:00',
      doctor: 'Dr. García',
      location: 'Hospital Diagnóstico, San Salvador',
      reminder: 'whatsapp',
      notes: 'Llevar exámenes previos',
      status: 'confirmada'
    },
    {
      id: 2,
      title: 'Reunión de Trabajo - Proyecto Q3',
      category: 'laboral',
      date: '2024-12-18',
      time: '14:30',
      doctor: 'Equipo de Desarrollo',
      location: 'Oficina Central, Torre Futura',
      reminder: 'sms',
      notes: 'Presentar avances del trimestre',
      status: 'pendiente'
    },
    {
      id: 3,
      title: 'Cena con Amigos',
      category: 'personal',
      date: '2024-12-20',
      time: '19:00',
      doctor: 'Grupo de Amigos',
      location: 'La Pampa Argentina, Zona Rosa',
      reminder: 'notificacion',
      notes: 'Cumpleaños de Carlos',
      status: 'confirmada'
    },
    {
      id: 4,
      title: 'Clase de Yoga',
      category: 'personal',
      date: '2025-12-16',
      time: '08:00',
      doctor: 'Instructor María',
      location: 'Centro de Bienestar, Zona Rosa',
      reminder: 'whatsapp',
      notes: 'Llevar mat de yoga',
      status: 'confirmada'
    },
    {
      id: 5,
      title: 'Revisión Dental',
      category: 'medica',
      date: '2025-12-19',
      time: '15:00',
      doctor: 'Dra. Martínez',
      location: 'Clínica Dental Sonrisa',
      reminder: 'sms',
      notes: 'Limpieza dental y revisión general',
      status: 'pendiente'
    },
    {
      id: 6,
      title: 'Sesión de Estudio',
      category: 'educativa',
      date: '2025-12-17',
      time: '16:00',
      doctor: 'Grupo de Estudio',
      location: 'Biblioteca Nacional',
      reminder: 'notificacion',
      notes: 'Repasar temas de React y JavaScript',
      status: 'confirmada'
    },
    {
      id: 7,
      title: 'Entrevista de Trabajo',
      category: 'laboral',
      date: '2024-12-21',
      time: '11:00',
      doctor: 'Recursos Humanos',
      location: 'Empresa TechCorp, Torre Empresarial',
      reminder: 'whatsapp',
      notes: 'Llevar CV actualizado y portafolio',
      status: 'pendiente'
    },
    {
      id: 8,
      title: 'Consulta Psicológica',
      category: 'medica',
      date: '2025-12-22',
      time: '17:00',
      doctor: 'Lic. Ana Rodríguez',
      location: 'Centro de Salud Mental',
      reminder: 'sms',
      notes: 'Sesión de seguimiento',
      status: 'confirmada'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    category: 'personal',
    date: '',
    time: '',
    doctor: '',
    location: '',
    reminder: 'whatsapp',
    notes: ''
  });

  // Sistema de categorías con colores e iconos
  const categoryColors = {
    medica: 'bg-red-500',
    educativa: 'bg-blue-500',
    laboral: 'bg-purple-500',
    personal: 'bg-green-500'
  };

  const categoryIcons = {
    medica: '🏥',
    educativa: '📚',
    laboral: '💼',
    personal: '🎉'
  };

  const reminderIcons = {
    whatsapp: '📱',
    sms: '💬',
    notificacion: '🔔'
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  const addAppointment = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: appointments.length + 1,
      ...formData,
      status: 'pendiente'
    };
    setAppointments([...appointments, newAppointment]);
    setFormData({ 
      title: '', 
      category: 'personal', 
      date: '', 
      time: '', 
      doctor: '', 
      location: '', 
      reminder: 'whatsapp', 
      notes: '' 
    });
    setCurrentView('dashboard');
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  const getUpcomingAppointments = () => {
    const today = new Date();
    return appointments
      .filter(apt => new Date(apt.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const getAppointmentsForSelectedDate = () => {
    if (!selectedDate) return [];
    return appointments.filter(apt => apt.date === selectedDate);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-SV', options);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-accent to-warning rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-dark">AGENDO</h1>
            <p className="text-accent mt-2">Tu agenda personal</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-accent mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent mb-2">Contraseña</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-accent to-warning text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Iniciar Sesión
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Demo - Usa cualquier email y contraseña
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6 text-accent" />
            </button>
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-accent" />
              <h1 className="text-xl font-bold text-dark">AGENDO</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell className="w-6 h-6 text-accent" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-danger rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-danger text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-dark">Menú</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-accent" />
            </button>
          </div>
          
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'dashboard' ? 'bg-accent text-white' : 'text-accent hover:bg-gray-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setCurrentView('appointments')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'appointments' ? 'bg-accent text-white' : 'text-accent hover:bg-gray-100'
              }`}
            >
              <List className="w-5 h-5" />
              <span>Citas</span>
            </button>
            <button
              onClick={() => setCurrentView('new-appointment')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'new-appointment' ? 'bg-accent text-white' : 'text-accent hover:bg-gray-100'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>Nueva Cita</span>
            </button>
            <button
              onClick={() => setCurrentView('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'settings' ? 'bg-accent text-white' : 'text-accent hover:bg-gray-100'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Configuración</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {currentView === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Citas Hoy</p>
                      <p className="text-2xl font-bold text-dark">3</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-warning rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Pendientes</p>
                      <p className="text-2xl font-bold text-warning">2</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-warning to-danger rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Confirmadas</p>
                      <p className="text-2xl font-bold text-accent">1</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendario Interactivo */}
              <CalendarWidget 
                appointments={appointments}
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate}
              />

              {/* Citas del día seleccionado */}
              {selectedDate && getAppointmentsForSelectedDate().length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-dark">
                      Citas del {formatDate(selectedDate)}
                    </h2>
                  </div>
                  <div className="p-6">
                    {getAppointmentsForSelectedDate().map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 ${categoryColors[appointment.category]} rounded-lg flex items-center justify-center text-white text-lg`}>
                            {categoryIcons[appointment.category]}
                          </div>
                          <div>
                            <h3 className="font-medium text-dark">{appointment.title}</h3>
                            <p className="text-sm text-gray-600">{appointment.doctor}</p>
                            <p className="text-sm text-accent">{appointment.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'confirmada' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-dark">Próximas Citas</h2>
                </div>
                <div className="p-6">
                  {getUpcomingAppointments().slice(0, 3).map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 ${categoryColors[appointment.category]} rounded-lg flex items-center justify-center text-white text-lg`}>
                          {categoryIcons[appointment.category]}
                        </div>
                        <div>
                          <h3 className="font-medium text-dark">{appointment.title}</h3>
                          <p className="text-sm text-gray-600">{appointment.doctor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-accent">{appointment.date}</p>
                        <p className="text-sm text-gray-600">{appointment.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'appointments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-dark">Mis Citas</h1>
                <button
                  onClick={() => setCurrentView('new-appointment')}
                  className="flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Nueva Cita</span>
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${categoryColors[appointment.category]} rounded-lg flex items-center justify-center text-white text-xl`}>
                          {categoryIcons[appointment.category]}
                        </div>
                        <div>
                          <h3 className="font-medium text-dark">{appointment.title}</h3>
                          <p className="text-sm text-gray-600">{appointment.doctor}</p>
                          <p className="text-sm text-accent">{appointment.date} a las {appointment.time}</p>
                          {appointment.location && (
                            <p className="text-xs text-gray-500">📍 {appointment.location}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmada' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                        <button
                          onClick={() => deleteAppointment(appointment.id)}
                          className="p-2 text-danger hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'new-appointment' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-dark mb-6">Nueva Cita</h1>
                
                <form onSubmit={addAppointment} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Título de la cita</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Ej: Consulta médica"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Categoría</label>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(categoryIcons).map(([key, icon]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setFormData({...formData, category: key})}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            formData.category === key
                              ? 'border-accent bg-accent/10'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className="text-2xl mr-2">{icon}</span>
                          <span className="capitalize">{key}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-accent mb-2">Fecha</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-accent mb-2">Hora</label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Doctor/Profesional</label>
                    <input
                      type="text"
                      required
                      value={formData.doctor}
                      onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Ej: Dr. García"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Ubicación</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Ej: Hospital Diagnóstico, San Salvador"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Tipo de Recordatorio</label>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(reminderIcons).map(([key, icon]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setFormData({...formData, reminder: key})}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            formData.reminder === key
                              ? 'border-accent bg-accent/10'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className="text-xl mb-1 block">{icon}</span>
                          <span className="text-sm capitalize">{key}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">Notas adicionales</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Información adicional sobre la cita..."
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-accent to-warning text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Crear Cita
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentView('dashboard')}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {currentView === 'settings' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-dark mb-6">Configuración</h1>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-accent" />
                      <div>
                        <h3 className="font-medium text-dark">Notificaciones</h3>
                        <p className="text-sm text-gray-600">Recibir recordatorios de citas</p>
                      </div>
                    </div>
                    <button className="w-12 h-6 bg-accent rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-accent" />
                      <div>
                        <h3 className="font-medium text-dark">Mensajes</h3>
                        <p className="text-sm text-gray-600">Notificaciones por SMS</p>
                      </div>
                    </div>
                    <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-accent" />
                      <div>
                        <h3 className="font-medium text-dark">Tema Oscuro</h3>
                        <p className="text-sm text-gray-600">Cambiar a modo oscuro</p>
                      </div>
                    </div>
                    <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AgendaYaApp;


