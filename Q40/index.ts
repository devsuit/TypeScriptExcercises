function make_album(artist: string, title: string, tracks?: number): Record<string, string | number> {
    const album: Record<string, string | number> = {
      Artist: artist,
      Title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  function make_magician(name: string, albumInfo: Record<string, string | number>): Record<string, unknown> {
    return { Name: name, Album: albumInfo };
  }
  
  
  let album4 = make_album("Rahat Fateh Ali Khan", "Back 2 Love");
  let album5 = make_album("Strings", "Dhaani", 12);
  

  let magician4 = make_magician("Ahmed Ali", album4);
  let magician5 = make_magician("Sana Zahra", album5);
  

  console.log(magician4);
  console.log(magician5);
  