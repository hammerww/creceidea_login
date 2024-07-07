import { MdPublic } from 'react-icons/md';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const VisitasVentas = () => {
  const percentage = 70;  // Este valor debe ser calculado basado en tus datos

  // Función para calcular el color basado en el porcentaje
  const getColor = (percentage: number) => {
    let color;
    if (percentage <= 50) {
      const mix = (percentage / 50) * 255; // mezcla desde verde (0,255,0) a amarillo (255,255,0)
      color = `rgb(${mix}, 255, 0)`;
    } else {
      const mix = ((percentage - 50) / 50) * 255; // mezcla desde amarillo (255,255,0) a rojo (255,0,0)
      color = `rgb(255, ${255 - mix}, 0)`;
    }
    return color;
  };

  return (
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg border border-[#83B8D5] flex flex-col items-center justify-between" style={{ width: '300px', height: '300px' }}>
      <div className="w-full flex justify-between items-center">
        <MdPublic size={30} className="text-[#83B8D5] ml-1 " />
        <h2 className="text-xs text-gray-700 font-semibold mr-1">Máximo 2000 visitas al Mes</h2>
      </div>
      <div style={{ width: '70%', height: '35%', overflow: 'hidden' }}>
      <CircularProgressbar
          value={percentage/2}
          styles={buildStyles({
            rotation: 0.75, // Ajusta este valor para iniciar desde la parte inferior del círculo
            strokeLinecap: 'butt', // 'round' si deseas bordes redondeados
            pathTransitionDuration: 0.5,
            pathColor: getColor(percentage),
            trailColor: '#d6d6d6',
          })}
        />
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-700">+2000</p>
      </div>
    </div>
  );
}

export default VisitasVentas;
