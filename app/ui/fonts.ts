import { Inter,  Lusitana } from 'next/font/google';
import localFont from 'next/font/local';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'], // Subconjunto de caracteres
    weight: ['400'], // Pesos disponibles (consulta Google Fonts para opciones)
  });
export const fuenteX =localFont ({
    src: './MetrimLetter-Regular.otf'
});