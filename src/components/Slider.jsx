import React, { useRef } from 'react'
import { leftIcon, rightIcon } from "../icons"
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper"; 

function Slider() {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

  return (
    <>

        <div className=' flex items-center  '>
    
            <LeftOrRightBtn isRight={true} isDsabled={true} navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />
            <LeftOrRightBtn isRight={false} isDsabled={false} navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />
        </div>

        <Carousel navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />

       
    </>
  )
}

export default Slider

function LeftOrRightBtn(props) {
    return ( <button ref={props.isRight ? props.navigationPrevRef : props.navigationNextRef} className={`${props.isRight ? "bg-transparent" : "bg-bg-pink" } h-[100px] border w-[100px] border-[#ffffff] flex justify-center items-center `}>{props.isRight ? rightIcon : leftIcon}</button> );
}

function Carousel(props) {
    return ( 
        <div className='mt-10 w-[100%]'>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
            prevEl: props.navigationPrevRef.current,
            nextEl: props.navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = props.navigationPrevRef.current;
            swiper.params.navigation.nextEl = props.navigationNextRef.current;
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
            <img className=' w-[1300px] h-[800px] ' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSFRgSFRUYGRgaGRgaGBkYHBoYGBgaGBgZGRoYGBgcIS4lHB4sIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQrISE0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NTQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALMBGQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEMQAAIBAgQDBQQGCAUDBQAAAAECAAMRBBIhMQVBUSJhcYGRBhMyoVJikrHR8BUjQnKCorLBFBYzU+EHJMJDY3Pi8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgICAgIDAAAAAAAAAAABAhEhMQNBEnFRgTJCYf/aAAwDAQACEQMRAD8A8dpDWdTgHyU+Y06XHy2nM0RqJue/KpbT8903GaoY6pmJlGpJqj3MrudZKQCPEYI4SqeDFBjbwvAcDFBjLxbwHEzT4Vg1Zc7jQ6Lbc9dOnfMhjNxKgBCgbKF0vpoPXWSkXKuJI7IChdgMvQb/AJ6R9F2a5yb2vZbA6W2Gn5PSaGA4Rek+IfNkUgE6G1yBrcg7kaC57pvcMwjZ/dqmW25Oi/8AM52x0mN7rnWqqqFXTMul1bQgEjmdt95kcY4VTRfeUHJG7IbnJ3Bufn6z1erwdbNnGe6ZSpF9Lknl9aedcXwjYBnUX92wDIGJ3B+Dv5+sY5c6XLHjbkw8cHEYWuSQLC506d0cDOrgdm74XjIZRAkv6c40vc39B0Ejbpy+8xp8YEpbpL2FoganbmevdKuFp8zHYrFchKFx2MvoJREbe8cDJtdHqIExt4maEKTHUqea+tgNWY7AfnlzjCY5NQy91x4rr92aGhWrX7K6KNhzJ6nv+6V4RJFEIQgEJYw2HaowRRcn83J5Dvl79Df+/R+1JpNqFLeXK1TS15Tpx1RpqJSXkUlO0jEilixBFEBYQhABFhCAjTYp1AHA3Btr4i8yJ1fs/gFrIjMNRoLcsul/l8pnO6m2sJ8rp1FdnXJhlbLnph6e4zOosy9krm1y3W+oJ0NrHqxXFMDshbBRlJvlsALA85zvEaCVKPu6q5shzpfQ3HQ+F5R/THvBlBAI08us4S7eqzjVaXtIjV1L02JK70wfiXmAevPynEcbqGpQc3LU0dPdlz2wWWzqL6ldb+QnYcPrBSWPMEDN8J00v0nO+2FSlVw6mmXDUWCsHUoSG7Jy8m7QHkDN49uef8XFCLeNELzu8514hb89I28LwyCZJRS+siUXMmZ7CBJVq2FhKZN4jNeEWrIcIt4y8INH3iXjbwhdFjqTZWB6HXw5/KMiQFqplYr0JEjljE65W6qAfFeyfuB85XkUS7gsC1W5uFRfidtFUf3PQCTYPADL72sSlPlb4qh+igP9R0EXF4k1gqKuSkl8ijv5k/tN3wmzq+KGU0aAKp+2x+Kp3seQ6LKf+F75PSQLpJcolGehgTEEcguYC1dAB5xkfVPaPp6RoEAEcBACKBAS0UCOtHZDAjtEtHETY4HwB8UwN8ic3IvfXXKOfj98lsnNJLbqM7AYJqzhFHieg6/8T1TgvBxSUEjKoAAB1Nh16TCOGTCOqUFzn9onVibbnymvRxLlb1CFW+g5nunm8mVyerx4zHvtqYmitVMtwpGzb+tuU4vGcCxFKv8Aq1FQMb3RgQPEEi067B8QphrtY93TynRLjKNle4tcA/V6Gc8dx1y1XC1eEVqSe9xKdj4rXzgKut7Kbg8/KefcVx7V6jOSStzkBJOVdhvzsBfqZ71xvFLlFmUg7WtPJPbDhCr/ANwihQTZ1GguTowHLXQ+XfO2GWrquGeNuO45S8LxLxLzu85bxBrEvHCAt7SNmvBmjYCwiQgLCNheFOvC8QRIDrxIl4XgWFGamw5qwPk3ZPzCy/Twq4cB64zOdUo/c1XoPq7mUcFimpNnWwNiASAbX52PMbjvEidySWYkk6knUknnCLNSu1Z8zm5toNgANlA5AdJOBpKFFrMPH79JeaIlR31ksnwHC3rEGxVCT2yN7b5Rz3AvtrOk/wArUfpv9ofhJc5GvjXCSSjpr0jLSQWA15zSIxFEeFXqRHikOTCGUYEeBJBh27j5wFIjcQH4anmNp6Zwv2Xw1Ph74zEozEqxQBiv1U23LN8rTj/ZjhTYmulIaZmAJ6LuzeSgnynaf9VuLrTWngqeioqswHLs5aaeS3P8Qko8tamGcJf4mC38SB/edvSpPTd0DBUQ5QB0XQfdKOB4OlFPeVBmqWvY6hCNcoH0hcXPpLS4o3Y7jX563nLO7ejx467WMLisj5ubBmue82HyAkntE+bDqyHtKwJ77ggyriqX6sVQLfqUP2rfjLvB6FMUg9U9pgDlPJdxp1nOzXLrLvhxtClWqOFz5Sb2/PnOmwXDMWin4nS3KZPEa6riUK6WJHkbfhPROA8Ty2DHflGV6MZ3+XK0+MOo926G40sdCOu+8k4ky1cNVPIU3NuYKqSPmBPQOM8Op4lC5VTpvYZh4GcJicIfdVMKlrsGAZthcEWPTpM3Uym15uN08wheSYii1N2psLMpIYHkRIp63kKI1jAmNhBCE0+FYAVTdjZRck9FUZmY9wHroOcKoUqLMbKCTvoL2HU9BHnDMOXoQfkDNjHYtUHu1UCx+A/AnTOB8dXqW0XYDpmVGZrsDoL7aWsQCdPEeohNqZESWWN/i1HzEidLeHI9YVHCEJARViRYBAmJCA9FJIABJ5Aam/cJ2PDuAXdDWtYhnZOigAAMfpFiNB0Mq+yVFTeoF7SXud/ita3gAfUTepVCzPUv2QQgvzVAST45mec8srOI3jImWuGqdkdlAEReZYgNr0HwW5aTQ7f+8sxaD5ab1LdoguSer6qvzUSl+iE+k85/bXLkAI5+kEEJ63nIBFAigR1oABJ6IJ5mQiaPCMMalRKaC7OwVR1LGwHzgemf9NsEtCjVx9XRVVlU/VUBnI/lUec4HiHFTWxa1apFmrIz9ApcXHgBp4Ceg+3+KXBYSlw9DqVBfvVTe5/ee7fwzyanTNWoqfSYDyJ1+V5n/Wne8ZpLTXKXGYPVJF9dWUDTwE5EV3ptYbcu8Tofa26OysLgn3iN1DajXpa0wWos6BjoSLj1I/tOTv8ATr+E/wDc4JQPis6W70ckD7Nj5zH9rlak6EaK6L4aKARKnBKz08NUZGs6V0b7SkD+mP47xlcXRF1yuNSOjc8vcf7y6ibrCL5qlPX9tRfxIE6PDY90c0zupt6TjGJ6+HdOuxtQVKNPGoNzkrAfsVBbW3fe48RJljuLjlqui4N7XCgSrC4O4I1/5k2KxQqPmTQMNARYkHfSZHBsWLg2W/UgE+s7Knw6lUelUzAEG5F99L7eU4Wb4d5fbyz2xoAVEfmykN3lLWJ77EDynOT2D2y9l6VftCoFYXsVsdSBe6312HTaeX8W4PUwx7QBUmyuuqnu7j3Gejx5TWvbzeTG736Z/uz3esTIekS0SdHNLSpFmC2OpAnSPVFKkbLa7KAD+0qDOR5uKfkJgYE9sEnQA/dLnEK2ZVA5M59cn4QXpVqozD3lwcxvYb6ltbeII9OsSiVv2jpe5HPvt4x+GrhCGtmI1Cn4b9/UX5c5ocE4GcQwVnSn2S2ZzYBVsL23YksAB4wm2ZWbOxIGXMzmw5ftAfO3lGZDbKdrmx5X05995rYzhaUu0aoIzFbKyliV3NuQ5X75Y4O1JroEYsNU0vY8y19r2WBz74Z1UOyMFOxIIB8DIJ0+OVqlbtoCeyGAAuQqIgsb6IFQk/R1J5TmJFEIQkBCEJR0vsjigvvlO2TN9nfQb8tJ0eIwop0UpCxeoVV7dW7T29W9Jxfs8b10S9g5yt4XDW8yoneVKBNUWFvdoHOt7ltBqNtA8459t49ExjLdEJ0uWI0+FNtP3ynjlk+Zeny/5kFBPeO9Q/EMqIoAsAAGZiOQGYDxWV/0vT/3B8pjTW3CQAikQtPc8wiwhAJJRrFCGUkEagjQjvBkcSQWMTjHqG7sWJ3JJJPmZd9nqV3eodqdN283tTH9ZPlMkzc9nzlo4puoop6szf8AgJnLprHtvU2/xmDZN6uHFgObUieyf4dV7gF6ypxyiaDJTA/9Gn/QLn1vMHC8RfD1RVpmzLfwYH4kYc1I/Ok7P2hK8QwtLFUB26eWm6c1vYAHrqN+hE53HcdZlqsr2TpCq9fCnerSzJ+/Sa6+oZhObxVMqzKdCCQeW02vZqr7rGUSxsC/u2/jBQfzEHykXtYpXEOHWzAm5GzdDEK551m17LVszPhGPZrrlXuqrc0z5m6/xCY7iNpVCjBgSCCCCNwQbgiVGxhsYaLWYHz9DpOowPEzUplMxzagWIG85+uVxl2plUqN2npvoGa2ppNt2rXynmTbSY74mpTYpcqQdQBlNx1tOeWO3XHPTUocVenVKVs1lYhlN8xI2BPp5TqMLiUxaPRKhhYlh00Gg56aa9ReYHFvd4nD0q2cLWRQjrY3c6We+20zOFF6bnI4Vr5b37JFxceG0txliTOyrPEvZWohvSYVF5DRXHcVOh8jr0mQ3C6wf3ZpuHtfKVINrXv36AnyM9SQmml65KhiAtRAtRASL2ZfiXRh15zleIYplxDolQsEVRm5E51dD4qW3OwTxiZZTtMsce4pJwg08O7+4DMAc1Q1FLJl1Ye7B7Og53OsxMM3vHCMbBiBfe1yNZvcQrsO2gs+QZwB8atkRUK88vaX+EznsXh2oVCjCxWx8iAyn0ImsbbzWKXG4U0nKAk7ENYi4POx25+kcrugBzEBhuD4XB9BChUVGD5S1jmVT8J6XN72v9xjVcopU6hlvbe17EE8gSPO1ptipqWHspdxZTfK5vqQNkAPaYnTXQc5XzW1XS2nU7XudBe8s0XBpC5F1dgAQbFXXtDTvC+F5VZcmjAH887QJMYWCgMT3jyFrjxBlGa3GCbIG+LdjzJanTY38CzfOZMlIIQhIohCLAnwVXJUR/osp9CJ6JTxAUPVJuCzKNbWRBltp3qT/FPNCJ31Crmw9NQBZ1RfIWZweoshmM43ispXanhiAMtSpcZiNi7WIHUXe/8ADD/L6f7f3RzVFaol7EIucaAWLdhNuWrnXmBLP+NP0h6n8Jzb088IhaPIiET3PIZaFophASJaLEMgaZ0fszSzYbG/VGHbyDuL/Oc4Z1PsK+ZsRhr2NWg+S5tdkDNb0LH+GZreN5YbUSz2E6H2U4qtCrl3So6K9tlp7Zj4MQ38PfMDEIb5ed9R4cpEgIBHJgAR3A3tOddY3ePYBqL1GGhSqyg8r/Gjedm9IntbxJMQ4bIwcBe0LFXRlDKeoIDTdxLrieGvWHxrUo03GpP6sMtM3O90cXPUGc3jcMbUxz93THooA+QEl4NbYYQNsZGyWnQtw85eXmv/ADMTFUyp5eUTZdQzCvlcHoR986H2o4dTo06VemXBq3DL+yMoBNjuNx2dt+k5gHWd1xVUbh1J6l7LUFrak3RhYegj2k6rk+HksQFuRccj6DvmsXwtM9tmDA6qnat1BJBF+6YuJ4oWGRAETay/ER9Zv7CwmdLcYTKusre0SZDTR66hiLnskWv9G4uZmVcVST/TZ6hJLEsoUE7akkltCRaw0J6mY0SPjEttaw45UBuAobk2UFhpbQn86nrKXvC+5JbcEm5PUE/P1laLLOEqcjSx8u4/hJWe6kEdrMCDfkQbi3kPUyqXvvJKVUjY/wBreB5SomdcmdCdVIPnsw8bkfZMfUpllvv8OXqQdx367ecrrTG5ZR4kn5ASapigoAToRc6EAkk5Ryvc672005tiOuWdQ7ai5W/Mm5Yk3Nye0ZVik8okyohCEBYsSKIUTtvZWtmpAWuaZZVvzao1we+wB+1OKnUexlY/raYIBIDLpexsVP3iZy6ax7buHclatW1yzEDTZU7Jue9s58x1lH/E/U+c1Hpe6phFIsqi/VrWBZvGZn+OP0R/LOTbm2WMIlhlkZE9zxoCIBY8iLaAzLFyS9hlshP53En92PpH1EumdsZlkuAxr4eolZCMyNmF9jyII6EEg+M0HpD6R+X4Su9EfSPy/CZsalWKfFKDZxUpupIOVkKuVO+oIW40tvsT4xFFNvhrIe5rof5gB6Eyg1Lv+78Ii4YsQq3JOwAH4TFxdZlXecGpLTwGJLsoR2pFGzAglWcnKQTc9m2k5/H8TGcimtwAqqWGoCqFHZHcOconHlEWgpLZQ2/wpmN3ygd/rAOea68lG/ixjUS5Wm1MXUbd2+Q+6ZtcsTqSfnNNyQCz6dw2EzmNyX2A1HltBDcPWKEEqCL3GYHw0sRN3jfFVrYVKaqVyVLsu41VrEHpcne243l2jWylDVYZTaymxGU6EEd4O8gxaUsQ9RUpAZmJRkGUqoZioyCyHddbA2B11uIrkIS3xHAvQqNScdpSAbbagEfIiU4UQhCQEIQkBCEIBCEIBCEIBCEWAQhFhRNj2XrZMQvRgynluL/eBMeWcE5SojbWZTfzEl6WPR8RSvfs30PLkbajpaVv0a30W/l/CWsKgFSozFiqqovsCwGYm5/eUeUT9Kr/ALifbX8Zw5dHJ1Kcruk1K1OVzTn07HhjOIhaWalKQNpM2KsUtBaO06D0EgSrblHmsOkymg5HQegld7dB6Rz1B0kTuOkVqRE1ug9Jqez7hGqVMostNxtsWFx8lMyi3dN3hOJ91hncoHRnKVBswUotmU9bkzLbIpgICw1bPa3QWJDd+zegl2hU589z3RmBpLUasAdkzKdtFIVjb91jIMO4bsnQbnqe6QFQmodPhHzkeJTshRz+4TRZdNBYbAf3MGwv7Tach3ASC8/D3qUqbIly4W2Uak95na8D9mVpJesbuRrY2Cc7A8zMLgPtVSoUPdCxdWNja+h109beUZiPaFqurVD4WIl+Mq7rE9u8EFxPZ1/V07t11ZR52VfScxVQCx8fMC2vznXYxaOJNmdVcXyOzCwP0X55D1/ZJv1B5bHKVYoVy5SVt5m/jrf0mbCVUiR0SGiWhaLCQJCEnSjmUkbjl3W185BBCBhAIQhAIsUC8eqdYUwCOVIFyNI5WvJQokuEoGo6oCBmNrnkLXJ9AZHaXuCVlp1kd9VVrkWvcEEaDrrEHT43hdV6IYs2TOozPoGLsBmCDfffkJF/lh/pj7Mj417TPXGT4UGmVSQLafE47TnTkVHc0wf8V+76H8Jvhjl0VSQmXq+AqKoqFGCHZiND5yg6n8kT02uMV6xlKrLdQeHqJXZPD1Eza1FeJePI8PURpHePUTKmtGGPNuojCwkWGzdwthgKmh/1bFh+ycqWv9UjTxXvmEWE0+H8Q93Qr0zswTKPrkkemUMf4RIqrwjFCnWRm+A3R/3XBU+lwfKLj8K1OsyAX7RK9DeZ7TTx+MR6VJFHaUdtrWYG1rE318fCQJUrhRlY3bmBrbzlF6zVDlW5HT+5MhIsPHXyk9Cmz6Dsrz5D/wCx8ZFT8NpJ7xUdXq30yUzl17msb+QnSnhOGBPvMNiKY+s4uT0sygzLwDph3RswUB1JO7EX1+V56COJ4WoA6YZ6hOocU0QHvzsVB8ZYlrmeGYbDowelh6lRhsXbOF7wqgCZ/tnh8/8A3ITLmIzjS6sBlvcbhgAet1blOwb2makciYenS6NWr00H8hYyvxXDPi6LBXw7n4stO75gOV829r66b8opHlBjZZxNA02KHl8wdQZXtMtkhFhaAhmhwjBmqzqCBlpvUJO1kGa3nt5zPm7wc+7w2Iq82yUh5nO3yS3nE7S9MivSy6jY/LukEt0GzAoeY0PhsPz0lfLY2PnIQyElyxaoAA6yKhBi5jJaS6S5hcKajogHxMq/aNoGbeKDaaXFaoqYh2HwhiFt9FOyvyUesqOg2EvvQFIOsVN9IUlWx1N9MvS9+fleLMVY6P2VwNHENUSsuYhFKm5Ug5rHUeImt/lvC/RP22mD7KYsU8ShbRWV1bwKE/8AiJsfpDEf7PymeWuPw6mtwejhsD72uuatW/0VuRkTQ5iAddNdeq984iog6TovaHG4jEsK9bLqFVQuiqLXAA5cz5zCdDPbN+3l+lB6fdKzqOk0KlOVnSSqpsvdIiJcanIMt9BIqArEZJbSje+2gubkCQOwECEpNDhqEpVUBiTkCqCAt+2cxG5IANgNdZSzibfAH92lesN1VEXxdib+iH1kWMEyPUSxXJYkkDXX1ldhMqdUINje5Nr92m3/AORc5OhYjuXU/nziUKZZgBz0mu3CqmTMoW31fi9TM2ydtSW9KFGmg3X7RJP2QB95noHsy71MOqJStqQXDJm/hDHT5zz+jRGaz37xe01afD0AzB2tuAGIA9I+Ui/C13Vb2fRhd6Vd26s6v6DYeUxeI+zlXCEYmmbKnatkyuttbAkEEm1rg85kUahH7TjoQ7j55rzt+EI2Iw/u2rVcrEJ8Qe+bSxLhiPXlJM5VvjseS4+u1R2d/iJ1sLDTSwHKViJqY7CqtR1zNo7jY8mIkHuF6t6RtFHLEtLxw6/W9IlbDgKWF9OsCjabmO/V4OhT5uXqHwJyr/Q3rMoYdiQp0Jta/O9rffNb2lYCstMbU1RPsqL/AM2f1lhZdyMqlowuQLG3P8IuPp5ajDvB+0A394+lQPM2J1GmkbjqmZtVykKqkXvfKAL+gEJubQq0bVa58NI5CAdYwG5v3yKkzWIAvbTcWM2OFuKZap9BHZf3yMiAebg+UxCdb98e1UnXoLSTtb0kwyXue+3kI59NemsfRWyj19Y11vM75PSrVXKxHQn75Z3EhxW4b6SqfO1j8wZGKh0mrElWqLAMpI0BBPhcXnr/APiU6r6GeLmoeu80P05V6zNxaljq/fM3ZZiQLWB5aSMbQhPY8sRPKjbmLCRVR+UcEHSLCZVUxW0pGEIqwCbGF0wZ76xv32p0/wAT6whIsZdSQGEJKqXA/Gv55Gdpwo6CEJx8jt4mN7VIFcEC17xuB1QX6GEJn+rfsBzbfnO89gHJUAm/bX5XhCSdl6ef4zWq/wD8j/1mMrCwv4/dCE25+mQ+1/CFBzZhfSx09IQm2IvcL7VWhfX9Yo8rjT5yPiTXxFQn/cf+oxYROm/J3+les5Ktrs1vLpDG/snuhCVhVMRYQma1OwY4becISFXm2EDyiQmFVq/wp4N/UZBCE6MiPhCB/9k=" alt="" />
            <div className='  uppercase text-6xl absolute -mt-[40vh] ml-20  w-[400px] items-center text-white'>
                make your body with angelfit
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className=' w-[1300px] h-[800px] ' src="https://wallpapers.com/images/featured/r5aa4v805ovp5cv4.jpg" alt="Нарутo " />
            <div className='uppercase text-6xl -mt-[40vh] ml-20  w-[400px] items-center text-white'>
                make your body with angelfit
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className=' w-[1300px] h-[800px] ' src="https://kartinkof.club/uploads/posts/2022-09/1662338309_1-kartinkof-club-p-novie-i-krasivie-kartinki-ataka-titanov-1.jpg" alt="Атака титанов" />
            <div className='uppercase text-6xl -mt-[40vh] ml-20  w-[400px] items-center text-white'>
                make your body with angelfit
            </div>
        </SwiperSlide>
      </Swiper>
       
       <div className=' mt-[10vh] flex justify-between items-center '>
          <div className=' flex items-center space-x-6 '>
            <img src="/rrIcon.png" alt="" />
            <div className=' felx flex-col '>
              <span className=' uppercase text-3xl text-white '>morbi sodales</span>
              <p className=' text-xl w-[200px] text-white opacity-50 '> Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div>
            <span className=' text-[#FD0054] '>----------</span>
          </div>
          <div className=' flex items-center space-x-6 '>
            <img src="/rrIcon.png" alt="" />
            <div className=' felx flex-col '>
              <span className=' uppercase text-3xl text-white '>morbi sodales</span>
              <p className=' text-xl w-[200px] text-white opacity-50 '> Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div>
            <span className=' text-[#FD0054] '>----------</span>
          </div>
          <div className=' flex items-center space-x-6 '>
            <img src="/rrIcon.png" alt="" />
            <div className=' felx flex-col '>
              <span className=' uppercase text-3xl text-white '>morbi sodales</span>
              <p className=' text-xl w-[200px] text-white opacity-50 '> Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
       </div>

        </div>
     );
}
