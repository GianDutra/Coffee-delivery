import React, { useEffect, useState } from "react";
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import axios from "axios";

interface Location {
  city: string;
  state: string;
}

export function Header() {
  const { cartQuantity } = useCart();
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    // Buscar a localização do usuário quando o componente é montado
    buscarLocalizacaoUsuario();
  }, []);

  const buscarLocalizacaoUsuario = () => {
    // Verificar se a API de Geolocalização está disponível no navegador
    if (navigator.geolocation) {
      // Solicitar a localização do usuário
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const apiKey = "be86a4366bd346858d41f84823095470"; // Substitua pela sua chave de API do OpenCage Data
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
            );
            const { city, state } = response.data.results[0].components;
            setLocation({ city, state });
          } catch (error) {
            console.error("Erro ao buscar a localização:", error);
            setLocation({ city: "Brasil", state: "" }); // Mostrar "Brasil" se ocorrer um erro
          }
        },
        (error) => {
          console.error("Erro ao obter a localização do usuário:", error);
          setLocation({ city: "Brasil", state: "" }); // Mostrar "Brasil" se o usuário negar a permissão
        }
      );
    } else {
      console.error("A API de Geolocalização não está disponível neste navegador.");
      setLocation({ city: "Brasil", state: "" }); // Mostrar "Brasil" se a API de Geolocalização não estiver disponível
    }
  };

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogo} alt="Coffee Delivery" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            {location ? `${location.city}, ${location.state}` : "Carregando..."}
          </HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
