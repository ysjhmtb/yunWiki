package com.yun.bootwiki.wiki.controller;

import com.yun.bootwiki.wiki.dto.WikiDto;
import com.yun.bootwiki.wiki.service.WikiService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WikiApiController {

    @Autowired
    private WikiService wikiService;

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/wikispring", method = RequestMethod.GET)
    public List<WikiDto> openWikiSpringList() throws Exception {
        return wikiService.selectWikiSpringList();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/wikireact", method = RequestMethod.GET)
    public List<WikiDto> openWikiReactList() throws Exception {
        return wikiService.selectWikiReactList();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/wikinetwork", method = RequestMethod.GET)
    public List<WikiDto> openWikiNetworkList() throws Exception {
        return wikiService.selectWikiNetworkList();
    }
}
