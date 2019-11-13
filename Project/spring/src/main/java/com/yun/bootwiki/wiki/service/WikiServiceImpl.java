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

    @Override
    public void updateWikiSpring(WikiDto wiki) throws Exception {
        wikiMapper.updateWikiSpring(wiki);
    }

    @Override
    public void updateWikiReact(WikiDto wiki) throws Exception {
        wikiMapper.updateWikiReact(wiki);
    }

    @Override
    public void updateWikiNetwork(WikiDto wiki) throws Exception {
        wikiMapper.updateWikiNetwork(wiki);
    }

    @Override
    public void deleteWikiSpring(WikiDto wiki) throws Exception {
        wikiMapper.deleteWikiSpring(wiki);
    }

    @Override
    public void deleteWikiReact(WikiDto wiki) throws Exception {
        wikiMapper.deleteWikiReact(wiki);
    }

    @Override
    public void deleteWikiNetwork(WikiDto wiki) throws Exception {
        wikiMapper.deleteWikiNetwork(wiki);
    }
}
