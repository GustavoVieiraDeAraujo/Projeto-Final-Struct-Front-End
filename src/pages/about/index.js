import CaixaTexto from "../../components/caixaTexto"
import MemberCard from "../../components/memberCard"
import MVVContainer from "../../components/mvvContainer"
import MVVValores from "../../components/mvvValores"
import { Container } from "./styles"


const About = () => {

    let member_teste = {
        name: "nome boladaun",
        image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcZGhoaGRkaGhkaGRocHRkZGRodGhkaICwjHR0pIh0dJTYkKS0vMzMzGiM4PjgyPSwyMy8BCwsLDw4PHhISHjUpIyk+MjMyMjIyMjIyNDIyNDIyMjoyMjIyMjIyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABGEAACAQIEAwYEAggDBgUFAAABAhEAAwQSITEFQVEGImFxgZETMqGxwdEUI0JSYnLh8AeCkhUWM6KywjRTc4PxJEOTo8P/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMBEAAgIBAwIEBQMEAwAAAAAAAAECEQMSITEEQRMiUXEFFDJhwYGx8DNCodEjQ5H/2gAMAwEAAhEDEQA/AH/sxjv0i5euEzkItoOigBmI82gH+QVP23s58DeHQK3+l1b7ClTsMCEXfSWPm39KZe2GOX9DvAHUqVjzH2oOOfl3BQlcdyx2MvZ8HaPQMvszAfSKO0nf4d45ThSpIGRz7EAz7zV7F8UbEZUwrkd7vXIIAAmQJGvn4VdzSLakkMVafFX94e4qjh+G5Uyu7OdySY9IXlXOOJv3rlxS5QucgO0SY0qs5uNbETm4pbFbt7xBLmPOUyLapbYjUaH4reE6RNJV+5Nu0eZuM4BB1kEz5fnV29BfXUs9wn0QJr6k0LRHcKeQQADkNASfE1JZWaMoOcSJL/MNSZEkabx+VWkIBYRIVd99Y0lhESaguCXUECFXMQDtMlR/fStbd6BEayWJ02AMDodq57l1sRcRtgDSZGsnUHSIjbT7VWuFS6iCVmYGpIP0Enw51PcxJdG7zFWMrI1nQa6848aq5+8CDpA5bbSIqVYORZw7MFudwZYAJOsAt1/uPrVq65YoyLpERGgOszIMzVSw6i2V3JJ9IP10FXLWIym2hJCg6hpUQd53679JqrLxKWJYi5mZTMgRt6T4yfbwr3D4djchtMzkHX+Iz6SPtUd+49y6xzAd7SB3ZXaNyfzNS4jIjsiAMxWGIkweYEwZqXxRC5C1vG2yVHxApJAI1IAzGe82kx05E0RtY2wru1sM7hWChO8oy3XMaDc5k3/KFhsYfhsotrBABaPEHmJ1gz4GjeE4zcRbYt2bZYd0MGOacpDZthMEnXrNClAKpBKzftXApVWkNcznLlEqJMAnu7nSYGlUriItx4JeSFaIbu7kjTukExPj7xcCxL3MXdS6VzatMjdUKHXTNIykmD8oqRGK3CsqysxUSR80aGd+ZPSuqiknaC9i0H+HbJlC5b0AyqAZ2gnSma1ZRCMmk0sLh7lwpkbZm6GOmq6bdOlGreBvAiWmKE6vgWml6Djw1V3bWrrYtLZ0570PwKkLr0q3YwqsJarNb7FldUiDFcTd/lEUOs27jNsS29Xb1rIakwGKVSTI1qrxuT3Z3L3PGe4B3xFU8XxKRqO6N6IYnFC42UGAB71U4lh7SWmURMD1olUqRzurTBH+0LfhXlU/0Py96yo0zBa5BngGGyWFgd4ifKqHHLh+DcB1JBq9wrFycvIQJ8KX+3PGFB+Db1Y7kch+dVk9GxEpaYgrs2112Fm2xUPGcjeK6zw7CLaRVQQFFcs7A4gLiNd9q6wcQKmHNy5CQT5fJZxJJUgaTpSR22sfDwj5V0AAnbcgR5md6cbeIBpX/wASb4/Qio3e4i7gRozTqf4aLKpb2EaUjk63wDb7oJY3gw070kx9RFU8AzKisYgsZgDmCInltUt24vxDI2VYk7lnZxsdoFVrbDISY7pYDzkcwPGrdgiMKQ7HeSZM8xIieZE/eocYoUAqwMqee0nYenhWwVs2UkwpYhPONep33ry/clEBnKkmTJ2PIeM+J0rlycyJFyqA2igT11jQRzEz+VWMPw5nURqzQABBI36bbfeswuELgtGhIkwYgcgNydgN5mmLjTLgcOAstiLuk/tKDv6xFdKW9LktGF7vgGLwtFK22IzCdJ0knmQf7iiL8KW3BbWBmEGRruI5bD3rzs32WuXBneVnXnmPWTzrovDezVtUykTpzoEsqTpbjMMFq3scwXG288MLKidm/Exv61cxPZW21s3cPrpJUEkdTB399R40x9oP8OVuAtaOU9OVJnA8Ze4divh3QcjEg8x5+I8Kup6uOfQrLHXPHqC7GDL22IYAAHukCQV5bg+RiNKI4S13bWcZhNx41nKvdMiNpAb08ac8Z2etXpv2SqC4RnhZIbVTBBEKZ26ilzD2Ft3XttL27do21eInLkKsFBOpGvjMVznYJx07FHsxhv1t24uyqVMwoGbUbb7ERyirTF0uk3EAYBgJWSTlCwxPKZ15HrUtnBlLJddA0SYAGgzbHbcDzJoWzkPmJ6lZIgabnfTSp5bYKWyHXszqUmB3VIAGwy/jvTddszEUidlcS5aLgQEBWBQEDK2YKJiNAOXWmv8A2nlOhml5vStwU5JJWGwDFSWSxYQd6iw2PRh3oq5hyrNKnQaURpNon7nvEMKzJpJ8hNJt4tbuZWYiTzp9vcVtoO8TPQDeuW9s+0a3boAWMk6nnO1XlXNlMulKw0cWtsyW1PM9KA8V49L90kyZk9KULvFC7jUxz1rzGYsEyDUx9QDyDL/vA37orKUf0mvanUV8RnT8TxFMLYZ2+aO6OvShfZLhBuZ8VeElpyA8vGlxbjY7FBWMW1PXkPxNdHwN22gyj5QIFLTyLmTod048k9tktl/sUeEW/h4lm2hz9af/AI+bWaQRJxbhQdTNG8dirjFcPh+9db5jyQdT+VS5OtiMlJ7B/Hcct2k3ljoFGpJ8BSn2oW/8K3fuxlzwtuBIDA6knQnb3582PhvZi3aAZznu82befDoPKgf+JfEBks21Bk/EIOkKAEDa+AqsG3KmTGD2bOe20BJnQ5rSksAT8sn36eVSXrfwwoCwCzFuZYBgFH038a3yx8NTBz9/QnkBqeQ3HtUKKQ1x94JUcxCxyjrm+lM2HS2K167+sdohV89JGon2+tW8Ng/iAZSEDbxyUGW0OwER5nTeqoUs9wLqG1zE6Zj1Ox1HKjnC0IGWAO9A13hiRPQZpJ/lFTJ0joRthnh2BVShOgEBF/dJ3Y/xQfrVC7a/S8ajN8qhjHTvQv0qdsUFuBBssDz3JP3r3swwOIeSBCCSTAEs5M/SgztRbX8saxpOVfzY6JgsqqFURAohYNLqcXspp8VT5T94org8eriVMjrQVtyNNWtgzZfWkT/EDhatluhRKMCfxpjxXGFtETJJ2A1NV8diRiLbD4LiRuSv2q7la27AYw0y3WzEbsdiiL1zDEzbuWiw12Iyj0JB5dKhx2CNpYb5nJGbaVXuhiY03B9YoXgMT8HHLMiGya6ESykg+1M/F7YfLmkrOw5sSDt5girN7gckNvYFOHOg1SWchhmjKMxmDG23iRQh1UtIAuH9WIHdABLQGhdSNJY7z4UYdUIebj91GAAmAYBYlo0PhtpE0IwtlTm7xENIJMSFnQHXvbRpvV48Cswx2cs/O2m4EDYRPLlTDZwvxAQgkgxNCOzrE2zIMBmGYmcw0g08cKxSW10Uyf7k0p8xGWRwl2E3NSel9gMvCLltZd58KJYHNbUGdBqZrbiuNZ4HIn7UO4rjYQIu5j2plaY7I7yx4JuKcVtgSTrr3vCuR8WxqvecpOUnSfvTXx7i4RMpEkiPMVz9N5rk1IFKWslZYrcIYqW0pYjSibYcd0UKebSxaeXTsBvhGspi/QqygfMoH479A7wThliwii4VzMJMzB/KjCJaUhUjrAadPekrHcRYMS4OgAURWvCuKEaMdTuelXUJzi/ESrl+psKFbMYcZjFt3GS3rcbdug/vlRvstYNtmYak/Mx1JPnSdbXNczJ8s6t1NMOB4l8O4u+Se9HTypiLW17ILDG3KnyONjiMOQ07cgaTv8Qblt/hQVAAuMZ5/Lt0+WmDHcYS5pbUnxiAPM0l9pG/WDNBVbbkkxGYZmgddAd/Cp0JNNF9T+li61uLoQafDRLZ5/KksJ56s0+VQJdhLjnNBJgagQWMLl6n1rzD3WZ0Lf8AEchn5QDCiIHQT6V6jFQ6zA3E7k5g6+uhA9OtEORLgMPKST3liJmCcp25dd+k0Swl3uKdIAJ00E846AD70OvsFt5QzBiVyyB+0yjzI3OnWiGKti3Z05kD8THhy9TVZbl4FXDXibizzzGPQj86v9mDb+JduXCMqhdDt+0ZI5+FB0bLcUDkCPZST9x6009g+Hpc+KzgEZwNddlBH3quR0v/AAZwxthJe0GHuDLbtu55ZLbsP9SoV+tGOA3JYAqVDCQCCp9VOoNEF4ZbHNiOmYx7D8azDKouSIAGnr0FBaWwxFNHvH8JcEtbQOQBpIBM+JjSguH4hjnlBbsgDYm8pnX91bZP1p1a6hAIIzARBMT61QsYy2x0MHmDAI9qu0kwcdUlvexzHtvwy4rJfZch2YjXrrPv9KK4fE/ERD++ung0Fl+of1Ipw7S4VLti4vIqY8CBINcy7N43PhVIPeT/AKlOcfY/6qq9l7fkiVP9fwELrKB/w1IhpzAwsZpMjVjPWh+FwyjIGkKxLEnmDoDO8QDrpNFMXb1+IsFSuiwZg6kg6dT9OtC7NtnIDFY0yjcgBtpnQaxrRY8GfkVML4TF5L4tj5NI0K6nWIP96U/YdrZUDSaVr3AxeVbkkNA1Gh8J8a3RLlkEliwA0nek9LjkepcmcnKMna2J+MNDd06gEx/Sl1sccxZ9xUqcQz3GY89KF9orgCErudKPKa7FZyvdC5xTGfEdiaFselSZZBqxY4czAEa6THOrRSiikUkWuGnST4fSi6EOwMRrUPB+HkuVI2A38aYbWAtrPKkM7q5C7xuTb7FL4dZRf4dvqKys/wAYjwgfx3Di+MtsHKsZmA5idiaQ+H4Nrl0ySEDEFusGIFdpRbNmyUIAyqJHprXJ0d8Ve+HYtnKGMxoAJ5nkK9Jhk3Z6NwSkn3GDFAItoJ8mg050+dmuFq1vM6x4Ea1HhuEW7Vu2zLndQAumx20n70f4CzQ+cAEnQdBFdpvdldSU7RSx3DVAhQB/fSuWdqsMVa9amcz2lWZkZzbkDw7s+prsONRswUc65T2ub/6101bLdtqf/wAWYz4d5fciqRvXdl8kotJJC82U3TplCqFAn+GZ8yWIrxwnxirkgZlB8ItjUdRrNZauA3HyrILwsnSF3k1WtyWYtBcM40gCYAA32gEUVA2FLVtbl0LbB3VpOkAggAdIME+RFXuM31zqo1FsbdY29zB9ah4EAFa8Z+XY8gAYg89Mx83FD8TfyqbjbtqB4/sj039qpzIPFVGyobn6w6yVU/6j8x9STTV/h5xAZbq9H09gJ+lIQvQGb29P6ke1FOxOKy3WU6ZhPmQf61bLDyNl8OSppHWsXxIhQoOrGB/flVTE4NniLjKBrAbKJ/H7VXbCsVDoe8AYnbWImPKhOFx6qD+l2sTcuBiMlpGZI1hgdFYbc512pTGnJGg5JbsaMFhrbMrX7yd0yve5+8V5xdQhz22DRqIO46VBb4xaYMlnhOIcgjV7du0h0j5nbrXmG4CWvPiHT4SsAEsBgwU6ks5Xu5jMQsgQNSdiyhUQayJy2v8AUv2OIfEt8+8PuK5P2Tv/AA3KnZgPcTPvArp/Eb62bbMdAqkn0E1y21bNthcI0EHwGoI9NfpVcXmjJMFn+pNDfgrn6pwx/wCGSscycxy+kRWzlWygLqCTmmBBOgjTTUxQ/AXSblxVjvoHExoRAO/kaLYRiYJAUKWmI3JGUa6xV4PYQzLcYOBXbjgLGnvp586N4/DA28vOKDdl8WqgqTqDFGMbfgluUUN7y3ewjaZzjiVg23K7cxypf4pe0gmYpj7XYoEhh70n4s5qBGHnb7CU61UUVcmaYOzgZjE6ZeniIFC+F4Eu0V0Xh/CLa2oGhA3G80zOVbJBErexSbDtbuk7ghag4jdOY6xpW1/FZG7xk7a60D4vjDm30obxqaoiey2JvjfxfWvaA/pYrKp8t9gO/odPu30ysjEZjBPhp1oZw17VsC3aAUTv48zPM+NKCcQdjqZ+1X8DcOYGabxrQqNPxtTo6jfe4lgMILcpNR8DxTrcJuNJYbDYUHOMzWoD6x7VBwq4RcAzSTzqVbiwutalQ/LczOGrjvaVT+m3z+01+60T+yttFHvy6wa7Pg8CpQEkknnXFO0LRj7s6w75dwf+LcA1/lA9/GuppBeWL2FbI5EGSdB4yAfqCNKlwIhbrRrLCOhOo05mtFMXFMCcoYT+9nuasJ570b4ZcFsNcuwQGDADQTlECOXOplKjoRtos4+z8HCojaM0ZhPyqsaHxka+1JPFMb8RpGw0Uf3z/wDgabl+0fEmuuqzplk/f+/MUusg36T9KvihSthMkuyNxBEdB+P5mvbJa1cW4uoUg+Y5j2rQKd+n5j86xLkaf16ii12B33OvdnOJpdRSDIIoq+E72ZQZPMGDXHeznEns3IU91uXL06V0rh3aQDRxFZ2SDxypcGlhyuSsZcLg7pOsx4n8KMXLQVdSKWf96bYG/tNKna7trdyZLXdLftHceIHWpj5tkTkk+Wz3tdxhXuG0pkKe8AdWO4XTYcyeg8aVOJ4g5cimST3jpqddvDcDloR4kZh7rKM0mTznXmSZ6mDrU6H6KfcghfxP+emYY1AUlk1jJwO3nvKnPIx8wRP3H1pltYIMdVEAiSfm/Z5+fLoTSx2Ol8Stz9xfuVWPvTziMMBDKYgk+cawaG9mDyq1YLtXv1iaFYAB8vGmlrZuKBOnOlLDYssxYiIJ0Hn0p24E6XlEHalscovI168GVHeTQvcb7KG6gIJEUmY3s7dRgoBI/pXcrlmFy1De4XbIJgTRpYXbotPpk3ZyOzwG5YHxDroJjxozwXidts6MdR18qd2wSshDDSkQdnPiYm5lMAdOp2oEHKM0ubBrG8bVdwH2juILhCRG/rQDF3g6xzor2iwjJda2dSh585AI+9CWtwNaPq09gM3TZR/RjWVbkV5U+K/Qp4jJsJgLjRC++lNHCuzlx4zPHlVxMNdt7KrD+Ewf+aruH4+iaXFdT4j8ZoscfdjmPBv5ghY7PKltpfUD++tc64Vx9lxtvPPwxcyt5SRPvFdGPH7DW278GD1rk1tAXZgNMxI95q78qGnjimqO/HiyZQUnbSuOYnF/ExNxyOpJO0kiPofemrhnHbfwgGbWOnhXO7iZbbZZBKqzAbknUg8xz0qmn1YeUl2JntILjgAnVQJmdFE+PPnzNb45v1Xd5OY00gnf7n0qo1xlDsQcwk6QYhNTpppXuFZmhYnYQR1yydDyE1OnuQpUyncttcfu6jKo8ZG/2re3g4Us2nzachtE9T4D6UwXbSonyCWIUEBgOXygbkzuOU61Vw3Drl1wkRJ06BeZ8458tee1lPYJptgq5hoVT+8rnXoB/ShdxYK+X9fxpm4yVz3AvyIpQH+bu/jPoaXWEsW8dB5fmSvvV4O1ZSapk/DQBcUn96ny1bBAmuffLHgdfSnzhT5rYNLdUuGN9K9mgimHWJpR7RIGeKarrEClfHJNzXnQMP1WHyLygXGW8qL45vvUd27Fsjyn+/pV/jcZU6At9CR+dC7C5+7MAkEnoo3NaEd1bM+WzpDn2GSAHP7TiPJQQT/qb6U/swnQ+J8Olc24PivkC6LoB4IAPv18abWvPbcGZRvpMUtK3JhXWlItPw1bk5Cysdete4A3sHczkEpzI2I6+BFFsFaTRgYnxJHvVzFXO6e7K7HmKTnh21R2aMnNjhPeLqSCS8ZW4oKneo7nEmAilxTlEqNPKqgxVwtqIFI5p9Y7bVewF5cnca7GNLg0KwmIFq6566ms4PihDA70ucZxTLfJmByjlRMccinCTfuWnOoqQP7Y3s2JZuoEnrpzpUvO21F+MXS7kmZ5z5UOS0zQFEk1o+JuxWWRyk0ihDf2ayjP+wrnWvajx8fqTZaxvGLtjEPaFzMmY5c0Np/Nv9a1vcRL/Mvt+Rpfxdxnys29WsNcJAp6DrZmlGScmgpdxqL3TzofgkDFoqTG2c6zzFR8EPeg0KcuQsJeai0XyK0zAUnTfQcvGhmFxU3JiUGSY1gAZTmO/P6UX47byqY17pI8dNqG4Hh952yWx3mhRGslmj+/eujJOO5O+ojwuDe+zWreZ2YlYBAPzAEknZQNyaf8B2esYZQWC3Lo/aPygwPlB5CBqddOVbcI4TbwSqgbPcYG5dfkY0VV/gBnffc8gNMZji0ACWPTXTwA+tROXZGNn6/VNwhwu/qQ49EbK1wndsokanUdCQN9d9KEYriaW0Kr8xABcbkbAIPE/YUN4txfK5/buGVA3VRt6nbT36ENfxDMxk94L3j+74Dx6nxqscblyehwtLFFd6NeMYkEfDTlq3n0nnz9zUWGEojdND5qD99Peo0t6SR/fP71rbufDYjkdfbn7UylSpFL3tkjqCCOeZfbvfl9aduCWSqiljgdlLl7UjaR/SukYLDAARSnUy/tGunS3aKeITSlrjCZcreNPVywDS92rwn6okciPvS+N1JDM1cRSS18VLoGpWWjwkkempH+YUHWywR8o2ifLQfeKMcHOW9LarkdXAMSrIVifElY8YNEuH4MJcbN31BZLgj5lkoxjyM+9P69Ii4amTdlMKrzrBGinkDpE+GlF/00W7nwbuisdAd1M8tNV21HWhfCk+Bcuo3eg+RYddNiRB8/PQ9x3BW79q1cXvJO50Zdht0HP12oLfmdhK8loYcAcigEyOVHLN8GBlG2tKPCrhUiyx592d+6e8s9dyPyotgsersADqT6xXHk+qyKOTUuHx+UG1wYTNoDbYTH7p8PA9OXrordpcUtoADTMYFNPC8SGDKSCZJAJ1I2OnSaT+1mFHxADtuPI/kZHpVssVKFDMM+vHaJ8A6ZQRuR6k0vdoT+sLE6feruHvrbAk0M464uxApRwulRM3qhQHx9zMMw5CPuak7P3wXjnQzGW2t7gxWvCrhW4GWjvEnHYjDjWpNo6N6fasob8e5+63tWUn8uP/8AD6CtxrIcuWt+HWVKA8604vZAURvUHA74GjHT6UXzPFabMy5yhadMNsgiPCqGDtZLuulFb+JRFVgN/WqT4xGugxQ8EpptVsO9J5ZVdljj+GD2wV56e+lXexWG7925rEmyhnUHM/xCDyMKuu8NVu6Va33VkjUDqeQ9TXo/U4Vra8lykj9p3Yl29g/+odKdg6TKfEsqhHT3f7EnF8X37hUiAoVY2gQB6c/Wl/i2NOXIBAgkgftc9eoqa5flAOcDXyqhjPmHirD/AJTVZSMPppSjO1tyL9+WcsqwY02031/rVO9dCLkU5mPzNVvEW2YETlURpMZiev4CqOMsZHEcwI9abx0z1OKVwTQQw65kJGvP+/XT2qLF2O9b8h7EA1rZzAALuSSfON/D+tGuI2h8VEGkC2p8NFn2H2NTxIPzEHcDsEXfIEes8vKPrT/wviiqMtxtRzI+/jSvgMFnJYCJk+WtEijftLPjsfcUpmeqRgZuvlh6hvG+NmhrbH2z+2Pr+VBe0GMBQhRM89QBVNW5Q30NaXwToB6nX6UJRXJ0/jnUyWnZfdcgLAYRmuIv77rP8qtJjwnl4CiJuOMQ6D/7j6c4OuhPkfv1qSzZ+GxuHXKNPOtOEX4ZrjHUtufDQmOmn0HSjarTs3OiyOeNS9TXjr5cbdRZGiERvpbSR7z6zTEuLOWwrDu5DIG2ZgdCPKfagePKvirbrqXBJ9Mx/wC6vcNin+GhMlRt0BQnbp81dkXAw56ISbGW8M15nEDQurDaYkH3FZw68PiMwOkFl6AEZgPwqlwlzluodQiFkPQGZB8jNVuAXCVB2JEfU1y5R5P4jDTCTva01+vIy8CxBGKQTsgU/wCaW+xHtRbtRw0XravsyMQT/CdCD6x7nrS5wYziGb+Igf5YX8KeriBw6ExnWAehI0PuPoKIlqi0wPQSUfK+LX7HLMSwW4EOtFnwiskxQzCcOf4rfEBzKxBHrTXglUaHYCkFO5NGtGDe5zztJcgFIg1D2Ou27d9TciOU8jRXtdhxcxQC/Kq6nqZNDeyS2v00rciADlnaRH9aexvyDGKPJ1D/AGjY/fWsrXNY6p7isqNbC+G/U4tisYzwWNQWcWBpHOoHYk1VO5osccdNC0caex0Ts9xbCMDbvFAY7ubY+vWhPEcVaN0G18oOnlSwbWk1ZwzgEVWWJOn6FoRSkqOkcLuj4ZbpEfzHb2gn0qHirfqABzf6KAJ/5jU1q38Kzbtkd4jM/gWAyqfEL7FjVLjTSirMBV19ydPGgtVFoxOszLN1Wz2Wy/IMY937GqxcswncA/8ASakDSv2qNN/f7GhEpaQbilHw7jkSQVE7nUkUKXM401jry5+3OmC9hy1i4OrLr5SRVDOqW+6B5kSTG5E6RTeGXlNvoJ6k7ff8E/CyM+dx3VGk/tHYmOn5e3pusza6M7Sf4QT8vnGnkfYWLzx3iczakncDWI6aTRzgmHL3FgfLB9h96vLa2xzNkUMbfpuMfDMNl08AKKfoobbWrOGwBOuUHbYj8alucPcd5AQemh+xoKao8JnWWeRyaYMbCMNgKjOGgdTRnDuxOW4nroCKh4nh2WYUx1An7V3lBxjl9BG45jgMyjYaT47fn7UJtYoyQeSMR02I/Ga84ijEPIMyCRB2yifrmrTAWw9ySe4RB6jQqw/GrxS02e66LbEortSDnBiT8W7HyJ8NDrrcbffoY9B40VxNkJbUMI+IWdegUkBSfAxNUbmPS0FthdFMqoPzfxtG6wZBHzZp6GosTirj3AXlnYnSP2flUKP3RoPQ0Npy3HpJaNPNjVhrv6q4AveZGznyUhR66+1DuCLlH8ok+gk0X4bbUYd4ObuEk9TBBM+tB0fKt7/03j/QYoa2aZ5D4k3KbxrhUv8AJc4FiIdQPJj4nf1mn0vGQ+Eexn8a51wdcoU+Rp7N2bSt460WF0I45qMpJEHHgiutzbOAJ6kGCPPWqOJ2zCiuPs/EtEASy99B4gbeo084pVvccRlGXahTgm/c9J02RZcafdcgTtBZfVh035xSQk/EJ6U9cb4oHXKKVOF8Oe/dKoNdSfKmsaUY0htRNfit+8aymj/cPEePtWVNI7f0ES3ck1ril6VBa2NYlwzBq6VAdFO0S4a4dm2pl7NcFD3kcmUU52H8uoHq0ehNA7CKyH9+YA69Ke+z3Dnw9hlf53aSB+ysaephvRqHOTF+rzeFilKt+F7lu6xZiYhRrqdT4n1oRxt9D5UXbQedAONvM+dLy4PO9N5siKdh9I58q2RtV849wagstFYzxlP8Q+9Crc1NNsvoVFts37w8zpsBVC7kALPlmIC7hVnbTck6xzNQ3rxIYqdMwWeepIgdBoddzHLSheMw5BCzMH+vL+9KaxQrazW6SMMKrmT3f2PGuG65HUALOkxt4c6e+yOGAljueXMHT8vvSHhMPux5aR660zYHGXLVy26nOpKjx8j1PQ/0q+VbUg2aPi42r3/J1PC24HnVkrW3CMN8YwDCgAuwgmT8qidJO56CP3gaJcS4IAjG2zyATlzasBqQD8wPSDE7g0GOGUlZlR6Wco2LdxJcedWMbZzCKMcK4ZYu2lYhiw0aLt2Cw5wH2YQw8GFW8XwVMpyZg4ErLuQT0IYkQdp5TVvl3WzLLoZabTRyPjfA2QlguhnXkZ3UnkZJKk8yQeVJtiy1t8pB1Yj1jSfCu14gKyyBoROvTxFJXaHhKnvLpofQ7iKHGWl0xjo86jLRIE4LC/GdZgqDu26CIbKfOe6dJkxJmr/DMOLt+5c2A/VhiYhYj3IG1DsBilt5id2M9IkD+vvRzhaC4CVET3o/dSYzHxMe0eNTJtbI0MmWOCFye1h/DYTLbuqNoP3H9+lLN9NHHhlPrApwtoRbedo+kzSpjky5xyOUj/UtQ1SPIdTnWTNqXf8A2S4Voim7ANmskUl2LokU2cHeUMTIjTTrVoO0JLafvYV4e8gciOW1IHazA/Bv3Mui3P1i9O98w9Gn0Ip0wt/LcKc52nl+dDP8RsGWwhvICGs97cEMhIDCeo0b/KetX02bPwvOoy39mc8s2yykmmP/AAze3buXWuRmmP8ALofvSng8SxtknpVB0cjuEgnoSPtV4xrk9FfofRX+8eF/8xayvmv/AGfe/eb3NZV9vU636Awk1PhnEGa0AkVJYsksANSTAFWlVAZU1QU4Bhbt26qWxLEgjoI1JboB/Tc10ziAAcjNmk6nyAA08h96XeyFvJaeFKvmh25FIBCgjlvI56eEEsRdzRIII2mgTkjz3xLPKc/DqkiLEXxO408aAcSfT1H3olfQHfeg2POsdBSrbbB9LBKSojUH++VVcU3dbwqVbukcx9qoYm53WHWiY43I08UG5F/ALNlf5pPpmH5VvxHD7N/EPtUfAtUI6MZ8NPtr9KKXLYZcu+v9+lXflmMwxz8e1xvYPsWw1vLzk6+BXT6qKYuz+HWEBHeb4YAMCHaEWTyJJXy3ofhMOQ2VQJYwORk6LqdAZPh60zYDgN1BlNi7B+bu5s07yBMj8Kl3LhDWaTxLUlbbVL92dT4TgxZtrbBmPmb95jufyHIADlW/E8b8K2W3YnKgPNjMT4AAk+ANK3B+MPa/Vvne2DlIafiW4MaZtWX+E6xsSIWteJcRN25mE/DXuoCCJ/eYgwRJEa8lHU0Z5IqOwCfVQUG1zxX3CPA7wt3Ambu3BH+dRIMcpWf9CimkbVzlXYXFfLmVSGC5mQllOYFmCsYBA0EbakiRTAO0b5ZNtFMafrHj1/V1GPItO7KdP1EVCpMHcdwyC8QpbutnYE91XYTlUDfcuc0mXWCACKV+0OIVLZLGeSgaknlA60bxCuyO9svdyBnuOAInVn12L79xZO2gFJ9vC3Lrm5cadwvQa/s+A68zryFL5Xb1PgXbWt5JKl2+4q2UZiWYaBtRy1JkT9K6F2bthVCndlMnTcDQH0pcfCKrPpElo85jQ0xcKci7b845jl51CdsU67qfESd7MOFYtvqNo+oFKnHsQFtCdCWVR9/sDTdctgW7kdJiZiCDSB2ot/ENtAYiW99B9jRJNadzLxY1LPFPjkiF+mjsvi2lkP7sqZ6RSphcM2gJmKZuCDK/oaBjT1F87jHgM46VdHHPp1FGcLcS/ba02zqVIYaEEQRVBl+IkT3gZH5VYwODIIdtxt4+Ph5UymV6dyhkuO6ZyjG8OOGZrD6sjFZ6xsfUQfWqeHtlTpTf2+tC5eDIIdVi4epB7s+Mb+nSgmFtggiYcVVzS5PWYsycU33KeZ+n0rKty/7prKjVEN40RLw1xBmDDfaiHAMEb15LYMEnfoBzoNYTMRXWOzPBrNu2rAjPvm5//FMZGonLHbLd/h/wQxVxEd5So2A69TQq3jUeQ+h6dR1FFcX2d+K/xDdadYj5dQRqOe9J2Pw727jW7gh19iOTKeYNKsnP8OxdVCntJcMsYvGLMKdtp/vShd47mtLhPnUF3EaRlI8tap4bsz38MyYeFfsaXHETNDXxRDyBsZ1HpVl8NcYTsOnM+dUzZacvNiB+X1pvHGKG8eB41qYew7vcWWJVTyHPx8qIW8OAAANOk/Xx86l/Rwqqo5AD2EVZwNmdOh09aUlNt0jIz9dOW6bCnCeDC7dFoaB5zkHa2PmI8SCF82E6V1rD2QqhQIAAAHQDYVzzgN1LGIW45hCGtsx2UMVYMTyGZFBOwBJOgNdFe8ioXZgFUFmbkABJPtTWBeUf6KSePVe/cX+0GFCXQ8d273T0zqNP9SD/APX41Q+DrOv51VxtxrzO7FkLFSBOiqrBkQrsYjXxZ4ImpbV2BoaDlcXK0J9ROEp3EtFTEgVc4bh0uXfh3NVyZlXYMQYcMeY1WF596ZiqQv8Ad1bxJrLGI/4d1NcpDjTUqRDDzKFh5kVXG6kmzsLjGabHD4IAAUAKBAAAAA6ADQCueY3h/wAK49vZVbu/+me8keAHdnqhroq6gFdQRIPIg7EUl9oyXu3HT5VQW56spdmjwBbL5qaazpOI516Xg2+wnXbZbL/NJ+/3ohgmi4p6N+NRH5V9a8sHWfH8aXSpnkHNtew22ocOs8iPLlXMOKsy4g3IlPkBG0royno0zpT/AI/H/CsXbk6gQv8AMdB9SKReG41Ldi6t4Z1LEwd2Y769ZEzXS32NXocanv3exKmPXcUwdmx8Qv4L9ZEVz7B4qSRlI10np59aZuE4woZE6iCBpI6UJNxnTKdV0nhbND/hSiklZJO40IHoOdXUuKZEkcyJ1/rSTb4qZ7pI3BE0ew90tbD689etG8RN0hnoPh+bJ5pLTH79/YX+MrcFy4zLOYltPGkq5jSt7MNR+15c66czqwM6jnSpxjg9vKz24ncjr/Wq6o8M2suFpJLsQ/7RtfvCspd/QvP2NZXeGvUX0yAVgRR/h2IuZdGIpeVwKMcOxWkDlTWRWjThyMWFxl4bNU+IsXLwAeDHytzH9PCqWFvjmYog+O+GjtuqqT9KSd3sHW24sfEgkH66SJiYPI1PbCml5bjF820nmdYA218qI2cQILTABAOu07UxLHXBbH1F7SDgtiK0w+CBuBo+XX15f34VRTFUZwTdzMd2+3Kgu4i/xTPGHTOuXsv1JGSp7LhGQcyQT4Ca8ReZqrcvS4PiKHxueNitToPPdzqQMwJGhG4kaEeVMfCOz+FvW0uKjI37QBQlHUwwBZCdCNDzEHnSjg38aZezXEVt3SjMBbuwCSYAuAQhJ27w7hJ5rbFGxOnTNHockdWmS5/cM/7tqdPi3QPO0f8A+VUeL8F+DaNxb1wkMghhbjvXFQ/KoOxpqturfKQfIg0M7WADDmdJe39HDf8AbTEoRp7GpkxY1BulwwFwDCPeuwzA20hn0ME/sJ6kSfBYPzCj2G7PXERR8ZDlAE/CM6af+ZUHZC6vw7lsRmV856srjQnxBUr5ItNNo6V0IR0opgw43jV79xT4pw+5atz+ksCe4iD4qqWIMAAXoCgAkgDQKdKC41yLZ6AAcgOS6AbUc45fFy6de6kosdZ/WH3AX/J40A4qYtnxIH1n8KBllcqXYzuvyLdLhAq58q1qn41sdYFbtbgetdR526VGdrbvcS3J775m8lUfiw9qVcTh5zL0IP8AfvTL2iTM6nopHtBP3oZcs6nxX8KFK9TZrdHmjCUPRP8AIOTBiKmQxzrX9JkaVrw2+HuhQAQNWO4npUKMpHt88sMY3JJ1xtYw8D4fnILghPq39PGimP42lu4tpGB5ZQNhVNsWQrGYJ0FKuAtFsSzEzB3+1EiqWxjZuplll9hvxxJGmlCD3fI7/nRhnDLNV7uFziolFNDmJ6olGF6VlS/oB/e+1ZQtDL6Dkyc6JcM3rKytOf0lI8hUb0TxX/hrn/pt9qyspP8AuQx2Ymj5q8f5X8x96yspwVRdSmuz8lv+RftWVlKZ+BP4t/Sj7/gtP8pobzrKyl32MDD3CmE5edErnyHyP/Sa8rKIgmL6gFif+IPP8Kn4H8v/ALg/6XrKynF9DNv/AKn7Mfey3/iP/ZP/AF26eLew9K9rK7F9KL9L/SQh2vkt/wAo+wqhxX5P8w/GvKylH9Rh9XxIGLvVptq9rKKjDlyivxfdPNv+2qd35v8AL+dZWUOXLG8Xb+dxew3yP/L+VZ2X+Z/Wvaypx9z2fVcv2Qw4j5Peh/B/nesrK6PAmuEHcP8AIfP8asJsaysqHwP4PpRBWVlZUDJ//9k=", 
        age: 20,
        position: "Testador geral"
    }

    let members_teste = [member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste, member_teste]

    return(
        <Container>
        <h1>A {"{Struct}"}</h1>
        <div className="texto">
            <CaixaTexto texto={<>
                <><br/> Somos a {"{Struct}"}, empresa junior de Engenharia de Computação da UnB! Mas o que é uma empresa junior?<br/>
                <br/>
    Uma Empresa Junior (EJ) é uma empresa criada, gerida e mantida por alunos universitários, com o objetivo de ter um ambiente que provê uma vivência empresarial aos estudantes.<br/>
    <br/>
    No mercado desde 2014, a {"{Struct}"} busca proporcionar soluções com as tecnologias mais atualizadas no mercado, prezando sempre pela qualidade e satisfação do cliente.<br/>
    <br/>
    Representamos o campo da Engenharia de Computação, um curso novo que une conhecimentos importantes das diferentes areas da computação. Um dos campos que inova, muda e cria o nosso futuro.<br/></>
            </>} direcao="e" tam_max_texto="100%"/>
            
            <div className="texto_laranja">
                <CaixaTexto texto={<span style={{fontSize : "1.5rem", color: "#071944", fontWeight: 300}}>
                Caminhe conosco para esse futuro, vamos construir esse futuro.</span>}
                 cor="#FD8D4B" direcao="e" tamanho={70} tam_max_texto="100%"/>
            </div>
        </div>

        <div className="mvv">
                <MVVContainer titulo={"Missão"} texto={<p style={{ fontSize : "1.25rem"}} >Formar estudantes mais profissionais e mais capacitados por meio da vivência empresarial.</p>}/>
                <MVVContainer titulo={"Visão"} texto={<p style={{ fontSize : "1.25rem"}} >Proporcionar os melhores produtos e experiência ao cliente. Fortalecer a representatividade da EC no ambiente acadêmico e no mercado.</p>}/>
                <MVVContainer titulo={"Valores"} texto={
                    <MVVValores/> }/>
        </div>

        <div className="membros">
            <h1 className="membros_titulo">Membros</h1>
            <div className="membros_linha"></div>
        
            <div className="container_membros">
                    {members_teste.map((item) => {
                        return(
                            <MemberCard member={item} />
                        )
                    })}

            </div>
        </div>

        </Container>
    )
}

export default About