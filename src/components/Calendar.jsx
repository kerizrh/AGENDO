import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const CalendarWidget = ({ appointments, onDateSelect, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Obtener el primer día del mes y el número de días
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Navegar al mes anterior
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navegar al mes siguiente
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Verificar si una fecha tiene citas
  const getAppointmentsForDate = (day) => {
    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return appointments.filter(apt => apt.date === dateString);
  };

  // Verificar si es hoy
  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  // Verificar si es la fecha seleccionada
  const isSelected = (day) => {
    if (!selectedDate) return false;
    const selected = new Date(selectedDate);
    return day === selected.getDate() && 
           currentDate.getMonth() === selected.getMonth() && 
           currentDate.getFullYear() === selected.getFullYear();
  };

  // Nombres de los días de la semana
  const dayNames = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  // Nombres de los meses
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Generar días del calendario
  const generateCalendarDays = () => {
    const days = [];
    
    // Días vacíos al inicio
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const dayAppointments = getAppointmentsForDate(day);
      const hasAppointments = dayAppointments.length > 0;
      
      days.push(
        <button
          key={day}
          onClick={() => onDateSelect(`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`)}
          className={`p-2 rounded-lg cursor-pointer transition-all relative ${
            isToday(day) 
              ? 'bg-accent text-white font-bold' 
              : isSelected(day)
              ? 'bg-warning text-white font-semibold'
              : hasAppointments
              ? 'bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200'
              : 'hover:bg-gray-100'
          }`}
        >
          <span>{day}</span>
          {hasAppointments && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
          )}
        </button>
      );
    }
    
    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      {/* Header del calendario */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-accent" />
        </button>
        
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-lg text-dark">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
        </div>
        
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-accent" />
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
        {dayNames.map((day, i) => (
          <div key={i} className="font-semibold text-gray-600 p-2">{day}</div>
        ))}
      </div>

      {/* Días del calendario */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {generateCalendarDays()}
      </div>

      {/* Leyenda */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span>Hoy</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span>Seleccionado</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Citas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
