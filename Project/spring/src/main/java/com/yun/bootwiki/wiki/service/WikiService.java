package com.yun.bootwiki.wiki.service;

import com.yun.bootwiki.wiki.dto.WikiDto;

import java.util.List;

public interface WikiService {
    List<WikiDto> selectWikiSpringList() throws Exception;
    List<WikiDto> selectWikiReactList() throws Exception;
    List<WikiDto> selectWikiNetworkList() throws Exception;

    void insertWikiSpring(WikiDto wiki) throws Exception;
    void insertWikiReact(WikiDto wiki) throws Exception;
    void insertWikiNetwork(WikiDto wiki) throws Exception;

    void updateWikiSpring(WikiDto wiki) throws Exception;
    void updateWikiReact(WikiDto wiki) throws Exception;
    void updateWikiNetwork(WikiDto wiki) throws Exception;



}
