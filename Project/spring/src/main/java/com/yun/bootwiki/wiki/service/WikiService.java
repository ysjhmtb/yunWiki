package com.yun.bootwiki.wiki.service;

import com.yun.bootwiki.wiki.dto.WikiDto;

import java.util.List;

public interface WikiService {
    List<WikiDto> selectWikiSpringList() throws Exception;
    List<WikiDto> selectWikiReactList() throws Exception;
    List<WikiDto> selectWikiNetworkList() throws Exception;
}
