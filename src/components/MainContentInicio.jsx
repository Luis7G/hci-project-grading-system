import React from "react";
import HomeImage from "../assets/images/home-image.png";

function Content() {
  return (
    <section className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
      <article className="flex flex-col self-stretch px-px pb-3 my-auto w-full text-white bg-[#5932EA] rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-20 pt-3 pb-6 rounded-3xl max-md:px-5 max-md:max-w-full">
          <h1 className="ml-2.5 text-4xl tracking-wide text-center max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
            Bienvenido al Sistema de Gestión Académica
          </h1>
          <img
            loading="lazy"
            src={HomeImage}
            className="object-contain self-center mt-3 max-w-full aspect-[1.43] w-[380px]"
            alt="Sistema de Gestión Académica"
          />
          <p className="mt-5 text-xl tracking-wide max-md:max-w-full text-justify">
            MODULOS:
            <br /> <br />
            Información estudiantil: Podrá visualizar datos generales de los
            estudiantes como nombres, carreras, materias inscritas y notas.
            <br /> <br />
            Detalles de los docentes: Accederá a información sobre los
            profesores, incluyendo sus materias dictadas, proyectos de
            investigación y datos de contacto.
            <br /> <br />
            Registro de investigaciones: Aquí podrá revisar los resúmenes y
            resultados de los trabajos de investigación que se llevan a cabo en
            la universidad.
            <br /> <br />
            Programación académica: Encontrará los horarios, aulas y demás
            detalles de las materias ofrecidas en cada período lectivo.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Content;
