import React from 'react';
import Image from 'next/image';
import imagemteste from '../icones/imagemteste.jpg'; // Certifique-se de que o caminho está correto

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card max-w-sm bg-white shadow-md overflow-hidden rounded-lg"> {/* Adiciona limite de largura */}
      <div className="relative w-full h-48"> {/* Define a altura da imagem */}
        <Image
          src={imagemteste}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>
      <div className="card-content p-4">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="card-description text-gray-700">{description}</p>
      </div>
    </div>
  );
};
