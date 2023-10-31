package com.ddoya.song.artist.controller;

import com.ddoya.song.artist.dto.ArtistSongResultDto;
import com.ddoya.song.artist.dto.EntireArtistResultDto;
import com.ddoya.song.artist.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/song/artist")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS,
        RequestMethod.HEAD })
public class ArtistController {

    @Autowired
    ArtistService artistService;

    @GetMapping("/all")
    public ResponseEntity<EntireArtistResultDto> getArtistList() {
        System.out.println("-------------------- entire artist service ------------------");
        System.out.println("-------------------- 가수 전체 조회 ------------------");
        EntireArtistResultDto entireArtistResultDto = artistService.getArtistList();
        System.out.println("결과 = " + entireArtistResultDto);
        return ResponseEntity.ok().body(entireArtistResultDto);
    }

    @GetMapping("/{artist_id}")
    public ResponseEntity<ArtistSongResultDto> getArtistSong(@PathVariable(name = "artist_id") int artistId) {
        System.out.println("-------------------- artist song service ------------------");
        System.out.println("-------------------- 선택한 아티스트의 노래 조회 ------------------");
        ArtistSongResultDto artistSongResultDto = artistService.getArtistSong(artistId);
        System.out.println("결과 = " + artistSongResultDto);
        return ResponseEntity.ok().body(artistSongResultDto);
    }
}
