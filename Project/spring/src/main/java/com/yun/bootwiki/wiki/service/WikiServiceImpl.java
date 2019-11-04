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


    @Override
    public void insertWikiSpring(WikiDto wiki) throws Exception{
        wikiMapper.insertWikiSpring(wiki);
    }

    @Override
    public void insertWikiReact(WikiDto wiki) throws Exception{
        wikiMapper.insertWikiReact(wiki);
    }

    @Override
    public void insertWikiNetwork(WikiDto wiki) throws Exception{
        wikiMapper.insertWikiNetwork(wiki);
    }
}
