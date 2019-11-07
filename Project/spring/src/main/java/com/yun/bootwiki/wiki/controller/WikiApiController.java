package com.yun.bootwiki.wiki.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.yun.bootwiki.wiki.dto.WikiDto;
import com.yun.bootwiki.wiki.service.WikiService;
//import org.json.JSONObject;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/post/SpringBoot", method = RequestMethod.POST)
    public void insertWikiSpring(@RequestBody String jsonMessage) throws Exception {
        // {"params":{"title":"123","contents":"# 456\n789"}}
        System.out.println(jsonMessage);
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        // {"params":{"title":"143","contents":"345"}}
        System.out.println(element);
//        System.out.println(element.getAsJsonObject().get("params"));
//        System.out.println(element.getAsJsonObject().get("params").getAsJsonObject().get("title"));
//        System.out.println(element.getAsJsonObject().get("params").getAsJsonObject().get("contents"));

        String title = element.getAsJsonObject().get("title").getAsString();
        String contents = element.getAsJsonObject().get("contents").getAsString();

        WikiDto wiki = new WikiDto();
        wiki.setTitle(title);
        wiki.setContents(contents);
        wikiService.insertWikiSpring(wiki);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/post/React", method = RequestMethod.POST)
    public void insertWikiReact(@RequestBody String jsonMessage) throws Exception {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        String title = element.getAsJsonObject().get("title").getAsString();
        String contents = element.getAsJsonObject().get("contents").getAsString();

        WikiDto wiki = new WikiDto();
        wiki.setTitle(title);
        wiki.setContents(contents);
        wikiService.insertWikiReact(wiki);

    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/post/Network", method = RequestMethod.POST)
    public void insertWikiNetwork(@RequestBody String jsonMessage) throws Exception {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        String title = element.getAsJsonObject().get("title").getAsString();
        String contents = element.getAsJsonObject().get("contents").getAsString();

        WikiDto wiki = new WikiDto();
        wiki.setTitle(title);
        wiki.setContents(contents);
        wikiService.insertWikiNetwork(wiki);

    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/update/SpringBoot", method = RequestMethod.PUT)
    public void updateWikiSpring(@RequestBody String jsonMessage) throws Exception {
        System.out.println(jsonMessage);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/update/React", method = RequestMethod.PUT)
    public void updateWikiReact(@RequestBody String jsonMessage) throws Exception {
        System.out.println(jsonMessage);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/update/Network", method = RequestMethod.PUT)
    public void updateWikiNetwork(@RequestBody String jsonMessage) throws Exception {
        System.out.println(jsonMessage);
    }
}
