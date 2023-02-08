import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../devices/devices";

function SimilarMovies() {
  const results = [
    {
      adult: false,
      backdrop_path: "/6C6ruMTzcrqIgD5Ix5KDXtAP36c.jpg",
      genre_ids: [28, 12, 14],
      id: 9334,
      original_language: "en",
      original_title: "The Scorpion King",
      overview:
        "In ancient Egypt, peasant Mathayus is hired to exact revenge on the powerful Memnon and the sorceress Cassandra, who are ready to overtake Balthazar's village. Amid betrayals, thieves, abductions and more, Mathayus strives to bring justice to his complicated world.",
      popularity: 24.95,
      poster_path: "/aITIsX20tACn6jgtyDcCYpRT216.jpg",
      release_date: "2002-04-18",
      title: "The Scorpion King",
      video: false,
      vote_average: 5.554,
      vote_count: 2739,
    },
    {
      adult: false,
      backdrop_path: "/zmVq7y63z8NewluK7MUBfTxuyvD.jpg",
      genre_ids: [35],
      id: 9377,
      original_language: "en",
      original_title: "Ferris Bueller's Day Off",
      overview:
        "After high school slacker Ferris Bueller successfully fakes an illness in order to skip school for the day, he goes on a series of adventures throughout Chicago with his girlfriend Sloane and best friend Cameron, all the while trying to outwit his wily school principal and fed-up sister.",
      popularity: 20.955,
      poster_path: "/9LTQNCvoLsKXP0LtaKAaYVtRaQL.jpg",
      release_date: "1986-06-11",
      title: "Ferris Bueller's Day Off",
      video: false,
      vote_average: 7.624,
      vote_count: 4194,
    },
    {
      adult: false,
      backdrop_path: "/q83qfC8fElBZPDPdUepKg05SwEn.jpg",
      genre_ids: [12, 35],
      id: 9396,
      original_language: "en",
      original_title: "Crocodile Dundee II",
      overview:
        "Australian outback expert protects his New York love from gangsters who've followed her down under.",
      popularity: 18.905,
      poster_path: "/2Nf0xeDuToLHysdkWj3aT5r42rC.jpg",
      release_date: "1988-05-19",
      title: "Crocodile Dundee II",
      video: false,
      vote_average: 5.82,
      vote_count: 946,
    },
    {
      adult: false,
      backdrop_path: "/xGmjRCB7mMgk69SULRKLaH16I73.jpg",
      genre_ids: [12, 35, 18, 10751, 14],
      id: 9447,
      original_language: "en",
      original_title: "Babe: Pig in the City",
      overview:
        "Babe, fresh from his victory in the sheepherding contest, returns to Farmer Hoggett's farm, but after Farmer Hoggett is injured and unable to work, Babe has to go to the big city to save the farm.",
      popularity: 15.638,
      poster_path: "/glO6LcTWUZcbxWT2SB4eRDnFSsP.jpg",
      release_date: "1998-11-25",
      title: "Babe: Pig in the City",
      video: false,
      vote_average: 5.556,
      vote_count: 1060,
    },
    {
      adult: false,
      backdrop_path: "/R0p2aJVD7NTrCJFbDlTPKoVCCz.jpg",
      genre_ids: [35, 28, 18],
      id: 10074,
      original_language: "en",
      original_title: "Hot Rod",
      overview:
        "For Rod Kimball, performing stunts is a way of life, even though he is rather accident-prone. Poor Rod cannot even get any respect from his stepfather, Frank, who beats him up in weekly sparring matches. When Frank falls ill, Rod devises his most outrageous stunt yet to raise money for Frank's operation -- and then Rod will kick Frank's butt.",
      popularity: 10.261,
      poster_path: "/jRkt03dXCVKnbvcQm3ygU1cjg9Y.jpg",
      release_date: "2007-08-03",
      title: "Hot Rod",
      video: false,
      vote_average: 6.4,
      vote_count: 820,
    },
    {
      adult: false,
      backdrop_path: "/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg",
      genre_ids: [12, 28, 878],
      id: 10138,
      original_language: "en",
      original_title: "Iron Man 2",
      overview:
        "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
      popularity: 119.22,
      poster_path: "/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
      release_date: "2010-04-28",
      title: "Iron Man 2",
      video: false,
      vote_average: 6.831,
      vote_count: 18909,
    },
    {
      adult: false,
      backdrop_path: "/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg",
      genre_ids: [12, 14, 28],
      id: 10195,
      original_language: "en",
      original_title: "Thor",
      overview:
        "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
      popularity: 115.133,
      poster_path: "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
      release_date: "2011-04-21",
      title: "Thor",
      video: false,
      vote_average: 6.768,
      vote_count: 19264,
    },
    {
      adult: false,
      backdrop_path: "/rKKMM7YbDXdB6V7V1hmOTQQtYCq.jpg",
      genre_ids: [10751, 35],
      id: 10992,
      original_language: "en",
      original_title: "Cats \u0026 Dogs",
      overview:
        "When a professor develops a vaccine that eliminates human allergies to dogs, he unwittingly upsets the fragile balance of power between cats and dogs and touches off an epic battle for pet supremacy. The fur flies as the feline faction, led by Mr. Tinkles, squares off against wide-eyed puppy Lou and his canine cohorts.",
      popularity: 26.692,
      poster_path: "/rM6qLVhApXiXYjMuzSFOESUiVaJ.jpg",
      release_date: "2001-07-04",
      title: "Cats \u0026 Dogs",
      video: false,
      vote_average: 5.385,
      vote_count: 1420,
    },
    {
      adult: false,
      backdrop_path: "/mQoSPZ8LR8d1ExCLWlcp8dlI78G.jpg",
      genre_ids: [10402, 35],
      id: 11031,
      original_language: "en",
      original_title: "This Is Spinal Tap",
      overview:
        '"This Is Spinal Tap" shines a light on the self-contained universe of a metal band struggling to get back on the charts, including everything from its complicated history of ups and downs, gold albums, name changes and undersold concert dates, along with the full host of requisite groupies, promoters, hangers-on and historians, sessions, release events and those special behind-the-scenes moments that keep it all real.',
      popularity: 10.053,
      poster_path: "/z2LA8eBTSuuPC4NBhIZRNIwpimH.jpg",
      release_date: "1984-05-04",
      title: "This Is Spinal Tap",
      video: false,
      vote_average: 7.476,
      vote_count: 1177,
    },
    {
      adult: false,
      backdrop_path: "/lbngJ1Sr9ElwhBrwqqc0pEPNDV7.jpg",
      genre_ids: [35],
      id: 11090,
      original_language: "en",
      original_title: "The Animal",
      overview:
        "When loser Marvin Mange is involved in a horrible car accident, he's brought back to life by a deranged scientist as half man and half animal. His newfound powers are awesome -- but their adverse side effects could take over his life. Now, Marvin must fight to control his crazy primal urges around his new squeeze, Rianna, and his rival, Sgt. Sisk, who both think he's one cool cat.",
      popularity: 22.101,
      poster_path: "/oNxEXmKTZtECHs0bQbI6dQoXYMV.jpg",
      release_date: "2001-06-01",
      title: "The Animal",
      video: false,
      vote_average: 5.087,
      vote_count: 1063,
    },
    {
      adult: false,
      backdrop_path: "/1RAxtBxslR4OZCZC1vxIRUxjR7a.jpg",
      genre_ids: [9648, 12, 35],
      id: 9637,
      original_language: "en",
      original_title: "Scooby-Doo",
      overview:
        "The Mystery Inc. gang have gone their separate ways and have been apart for two years, until they each receive an invitation to Spooky Island. Not knowing that the others have also been invited, they show up and discover an amusement park that affects young visitors in very strange ways.",
      popularity: 68.628,
      poster_path: "/3B9dxR5hE34W8ALLbP6SGdTgBRc.jpg",
      release_date: "2002-06-14",
      title: "Scooby-Doo",
      video: false,
      vote_average: 6.048,
      vote_count: 3849,
    },
    {
      adult: false,
      backdrop_path: "/mPH8S91pUYB5vfbaVUcxsW1NO1J.jpg",
      genre_ids: [18, 14, 9648],
      id: 9697,
      original_language: "en",
      original_title: "Lady in the Water",
      overview:
        "Apartment building superintendent Cleveland Heep rescues what he thinks is a young woman from the pool he maintains. When he discovers that she is actually a character from a bedtime story who is trying to make the journey back to her home, he works with his tenants to protect his new friend from the creatures that are determined to keep her in our world.",
      popularity: 13.646,
      poster_path: "/ddNmoSy1Jd3PBF5XDZvrrBIfrja.jpg",
      release_date: "2006-07-20",
      title: "Lady in the Water",
      video: false,
      vote_average: 5.6,
      vote_count: 1180,
    },
    {
      adult: false,
      backdrop_path: "/eU3HxRTWqoSG4idsYj8zD9UGan.jpg",
      genre_ids: [28, 80, 53],
      id: 9705,
      original_language: "en",
      original_title: "Swordfish",
      overview:
        "Rogue agent Gabriel Shear is determined to get his mitts on $9 billion stashed in a secret Drug Enforcement Administration account. He wants the cash to fight terrorism, but lacks the computer skills necessary to hack into the government mainframe. Enter Stanley Jobson, a n'er-do-well encryption expert who can log into anything.",
      popularity: 20.217,
      poster_path: "/mM6h4jMqC4q5IaFgBIGKQDLnRU.jpg",
      release_date: "2001-06-07",
      title: "Swordfish",
      video: false,
      vote_average: 6.209,
      vote_count: 2320,
    },
    {
      adult: false,
      backdrop_path: "/qTVgXx0pgBmsGqc8wJsfbd71ppa.jpg",
      genre_ids: [35],
      id: 9718,
      original_language: "en",
      original_title: "Talladega Nights: The Ballad of Ricky Bobby",
      overview:
        "The fastest man on four wheels, Ricky Bobby is one of the greatest drivers in NASCAR history. A big, hairy American winning machine, Ricky has everything a dimwitted daredevil could want, a luxurious mansion, a smokin' hot wife and all the fast food he can eat. But Ricky's turbo-charged lifestyle hits an unexpected speed bump when he's bested by flamboyant Euro-idiot Jean Girard and reduced to a fear-ridden wreck.",
      popularity: 25.357,
      poster_path: "/3iCiTqsmJz1mO85AHzTiHNkRmb6.jpg",
      release_date: "2006-08-04",
      title: "Talladega Nights: The Ballad of Ricky Bobby",
      video: false,
      vote_average: 6.338,
      vote_count: 1404,
    },
    {
      adult: false,
      backdrop_path: "/i2nmKc0xqj4E4g1RiwXaQagNfsa.jpg",
      genre_ids: [80, 18, 53],
      id: 9740,
      original_language: "en",
      original_title: "Hannibal",
      overview:
        "After having successfully eluded the authorities for years, Hannibal peacefully lives in Italy in disguise as an art scholar. Trouble strikes again when he's discovered leaving a deserving few dead in the process. He returns to America to make contact with now disgraced Agent Clarice Starling, who is suffering the wrath of a malicious FBI rival as well as the media.",
      popularity: 7.205,
      poster_path: "/v5wAZwRqpGWmyAaaJ8BBHYuNXnj.jpg",
      release_date: "2001-02-08",
      title: "Hannibal",
      video: false,
      vote_average: 6.758,
      vote_count: 4081,
    },
    {
      adult: false,
      backdrop_path: "/qCSLKtNrL9xIyw2kjzi0GEUvqXx.jpg",
      genre_ids: [35],
      id: 10358,
      original_language: "en",
      original_title: "Zack and Miri Make a Porno",
      overview:
        "Lifelong platonic friends Zack and Miri look to solve their respective cash-flow problems by making an adult film together. As the cameras roll, however, the duo begin to sense that they may have more feelings for each other than they previously thought.",
      popularity: 41.283,
      poster_path: "/40qxr2p2s297Q1mWFJOsRatQPK0.jpg",
      release_date: "2008-09-18",
      title: "Zack and Miri Make a Porno",
      video: false,
      vote_average: 6.273,
      vote_count: 2041,
    },
    {
      adult: false,
      backdrop_path: "/pS6lhz2dSQ5OfLUlg8000O5igMJ.jpg",
      genre_ids: [35, 12, 10402, 10751],
      id: 11176,
      original_language: "en",
      original_title: "The Muppet Movie",
      overview:
        "A Hollywood agent persuades Kermit the Frog to pursue a career in Hollywood. On his way there he meets his future muppet crew while being chased by the desperate owner of a frog-leg restaurant!",
      popularity: 15.772,
      poster_path: "/7tG5Fded5HfwKUrOFj5ozMt1AW1.jpg",
      release_date: "1979-06-22",
      title: "The Muppet Movie",
      video: false,
      vote_average: 7.1,
      vote_count: 486,
    },
    {
      adult: false,
      backdrop_path: "/jIv4Gb9ttCOQsNTpSRG8ZRwWkAn.jpg",
      genre_ids: [14, 16, 10749, 10751],
      id: 10882,
      original_language: "en",
      original_title: "Sleeping Beauty",
      overview:
        "A beautiful princess born in a faraway kingdom is destined by a terrible curse to prick her finger on the spindle of a spinning wheel and fall into a deep sleep that can only be awakened by true love's first kiss. Determined to protect her, her parents ask three fairies to raise her in hiding. But the evil Maleficent is just as determined to seal the princess's fate.",
      popularity: 47.296,
      poster_path: "/e3K5cLvVRXVxhw4mXQET92p1dnz.jpg",
      release_date: "1959-02-17",
      title: "Sleeping Beauty",
      video: false,
      vote_average: 6.938,
      vote_count: 4572,
    },
    {
      adult: false,
      backdrop_path: "/sbcd1j2Cc7BbvpCPKNTZV0hpqA1.jpg",
      genre_ids: [16, 12, 10751, 35],
      id: 10898,
      original_language: "en",
      original_title: "The Little Mermaid II: Return to the Sea",
      overview:
        "Set several years after the first film, Ariel and Prince Eric are happily married with a daughter, Melody. In order to protect Melody from the Sea Witch, Morgana, they have not told her about her mermaid heritage. Melody is curious and ventures into the sea, where she meets new friends. But will she become a pawn in Morgana's quest to take control of the ocean from King Triton?",
      popularity: 9.43,
      poster_path: "/tzrrZlY7pVTRV9GXd7Q1BkynnUx.jpg",
      release_date: "2000-01-23",
      title: "The Little Mermaid II: Return to the Sea",
      video: false,
      vote_average: 6.44,
      vote_count: 1511,
    },
    {
      adult: false,
      backdrop_path: "/gxZ478weUdq3tiDG348lqlpSE5F.jpg",
      genre_ids: [27, 9648, 53],
      id: 11377,
      original_language: "en",
      original_title: "House on Haunted Hill",
      overview:
        "An amusement park mogul offers a random group of diverse people $1 million to spend the night in a decrepit former mental institution.",
      popularity: 12.471,
      poster_path: "/weiGTsZqBglKxkIn5xj1nEjxn81.jpg",
      release_date: "1999-10-29",
      title: "House on Haunted Hill",
      video: false,
      vote_average: 5.597,
      vote_count: 733,
    },
  ];

  return (
    <Container>
      <SectionTitle>Similar Movies</SectionTitle>

      <MoviesContainer>
        {results.map((movie) => (
          <Link to="/" style={{ textDecoration: "none" }} key={movie.id}>
            <MovieContainer>
              <MovieImage
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              ></MovieImage>
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieContainer>
          </Link>
        ))}
      </MoviesContainer>
    </Container>
  );
}

const Container = styled.div`
  @media ${device.desktop} {
  }
`;

const MoviesContainer = styled.h5`
  padding: 10px;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  overflow-x: hidden;
`;

const SectionTitle = styled.h4`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5vw;
  margin-right: 30px;
`;

const MovieImage = styled.img`
  width: 100%;
`;

const MovieTitle = styled.p`
  color: white;
  font-size: 12px;
  padding: 10px 0;
  margin: 0;
  width: 100%;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  background-color: black;

  @media ${device.desktop} {
  }
`;

export default SimilarMovies;
