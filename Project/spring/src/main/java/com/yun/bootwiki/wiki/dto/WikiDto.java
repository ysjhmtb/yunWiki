package com.yun.bootwiki.wiki.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
public class WikiDto {
    private int wikiIndex;
    private String title;
    private String contents;
    private String createdDatetime;
}
