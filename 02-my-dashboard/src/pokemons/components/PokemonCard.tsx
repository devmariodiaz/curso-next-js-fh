import Image from "next/image";
import { SimplePokemon } from ".."
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon } : Props) => {

    const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
            <Image
                className="h-32 w-32 text-white rounded-full mx-auto"
                key={ id }
                src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png` }
                width={ 100 }
                height={ 100 }
                alt={ name }
                priority={ false }
            />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ pokemon.name }</p>
            <p className="text-sm text-gray-100">John@Doe.com</p>
            <div className="mt-5">
                <Link
                 href={`/dashboard/pokemons/${name}`}
                 className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                    Más información
                </Link>
            </div>
            </div>
            <div className="border-b">
                <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <div className="text-green-600">
                        <IoHeartOutline className="text-red-600" />
                    </div>
                    <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        No es favorito
                    </p>
                    <p className="text-xs text-gray-500">View your campaigns</p>
                    </div>
                </Link>
            </div>
            
        </div>
    </div>
  )
}
