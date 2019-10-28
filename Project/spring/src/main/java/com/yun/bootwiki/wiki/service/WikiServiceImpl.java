package com.yun.bootwiki.wiki.service;

import com.yun.bootwiki.wiki.dto.WikiDto;
import com.yun.bootwiki.wiki.mapper.WikiMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WikiServiceImpl implements WikiService {

    @Autowired
    private WikiMapper wikiMapper;

    @Override
    public List<WikiDto> selectWikiSpringList() throws Exception {
        return wikiMapper.selectWikiSpringList();
    }

    @Override
    public List<WikiDto> selectWikiReactList() throws Exception{
        return wikiMapper.selectWikiReactList();
    }

    @Override
    public List<WikiDto> selectWikiNetworkList() throws Exception{
        return wikiMapper.selectWikiNetworkList();
    }
}
