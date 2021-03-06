package com.yun.bootwiki.wiki.mapper;

import com.yun.bootwiki.wiki.dto.WikiDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.http.converter.json.GsonBuilderUtils;

import java.util.List;

@Mapper
public interface WikiMapper {
    List<WikiDto> selectWikiSpringList() throws Exception;
    List<WikiDto> selectWikiReactList() throws Exception;
    List<WikiDto> selectWikiNetworkList() throws Exception;
    void insertWikiSpring(WikiDto wiki) throws Exception;
    void insertWikiReact(WikiDto wiki) throws Exception;
    void insertWikiNetwork(WikiDto wiki) throws Exception;
    void updateWikiSpring(WikiDto wiki) throws Exception;
    void updateWikiReact(WikiDto wiki) throws Exception;
    void updateWikiNetwork(WikiDto wiki) throws Exception;
    void deleteWikiSpring(WikiDto wiki) throws Exception;
    void deleteWikiReact(WikiDto wiki) throws Exception;
    void deleteWikiNetwork(WikiDto wiki) throws Exception;
}
