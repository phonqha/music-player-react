import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Vitamin D",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
            artist: "fantompower",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=22790",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Viatecture",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist: "Leavv, Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20119",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "When I Get Up In the Morning",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
            artist: "Middle School",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=22933",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Luz",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
            artist: "Juan Rios, Ian Ewing",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21651",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Kinsfolk",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Rest Until Dark",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Cruising",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            artist: "Evil Needle",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default chillHop;
