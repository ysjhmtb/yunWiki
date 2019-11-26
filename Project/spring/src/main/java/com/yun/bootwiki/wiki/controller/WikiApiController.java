package com.yun.bootwiki.wiki.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.sun.org.apache.xpath.internal.operations.Bool;
import com.yun.bootwiki.wiki.dto.WikiDto;
import com.yun.bootwiki.wiki.service.WikiService;
//import org.json.JSONObject;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@EnableScheduling
public class WikiApiController {

    @Autowired
    private WikiService wikiService;
    private WikiDto wiki;
    private static boolean hasLogin;

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
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        String title = element.getAsJsonObject().get("title").getAsString();
        String contents = element.getAsJsonObject().get("contents").getAsString();

        wiki = new WikiDto();
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

        wiki = new WikiDto();
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

        wiki = new WikiDto();
        wiki.setTitle(title);
        wiki.setContents(contents);
        wikiService.insertWikiNetwork(wiki);

    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/update/SpringBoot", method = RequestMethod.PUT)
    public void updateWikiSpring(@RequestBody String jsonMessage) throws Exception {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        String title = element.getAsJsonObject().get("title").getAsString();
        String contents = element.getAsJsonObject().get("contents").getAsString();
        int wikiIndex = element.getAsJsonObject().get("wikiIndex").getAsInt();

        wiki = new WikiDto();
        wiki.setTitle(title);
        wiki.setContents(contents);
        wiki.setWikiIndex(wikiIndex);
        wikiService.updateWikiSpring(wiki);

    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/update/React", method = RequestMethod.PUT)
    public void updateWikiReact(@RequestBody String jsonMessage) throws Exception {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        String title = element.getAsJsonObject().get("title").getAsString();
        String contents = element.getAsJsonObject().get("contents").getAsString();
        int wikiIndex = element.getAsJsonObject().get("wikiIndex").getAsInt();

        wiki = new WikiDto();
        wiki.setTitle(title);
        wiki.setContents(contents);
        wiki.setWikiIndex(wikiIndex);
        wikiService.updateWikiReact(wiki);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/update/Network", method = RequestMethod.PUT)
    public void updateWikiNetwork(@RequestBody String jsonMessage) throws Exception {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        String title = element.getAsJsonObject().get("title").getAsString();
        String contents = element.getAsJsonObject().get("contents").getAsString();
        int wikiIndex = element.getAsJsonObject().get("wikiIndex").getAsInt();

        wiki = new WikiDto();
        wiki.setTitle(title);
        wiki.setContents(contents);
        wiki.setWikiIndex(wikiIndex);
        wikiService.updateWikiNetwork(wiki);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/delete/SpringBoot", method = RequestMethod.PUT)
    public void deleteWikiSpring(@RequestBody String jsonMessage) throws Exception {
        System.out.println(jsonMessage);
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        int wikiIndex = element.getAsJsonObject().get("wikiIndex").getAsInt();

        wiki = new WikiDto();
        wiki.setWikiIndex(wikiIndex);
        wikiService.deleteWikiSpring(wiki);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/delete/React", method = RequestMethod.PUT)
    public void deleteWikiReact(@RequestBody String jsonMessage) throws Exception {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        int wikiIndex = element.getAsJsonObject().get("wikiIndex").getAsInt();

        wiki = new WikiDto();
        wiki.setWikiIndex(wikiIndex);
        wikiService.deleteWikiReact(wiki);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/delete/Network", method = RequestMethod.PUT)
    public void deleteWikiNetwork(@RequestBody String jsonMessage) throws Exception {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        int wikiIndex = element.getAsJsonObject().get("wikiIndex").getAsInt();

        wiki = new WikiDto();
        wiki.setWikiIndex(wikiIndex);
        wikiService.deleteWikiNetwork(wiki);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/setLogin", method = RequestMethod.POST)
    public void setLogin(@RequestBody String jsonMessage) throws Exception {

        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(jsonMessage);
        String email = element.getAsJsonObject().get("email").getAsString();
        System.out.println(email);

        if (!hasLogin && email.equals("yunseokjeonapi@gmail.com")) {
            hasLogin = true;
            System.out.println(hasLogin);
        }
    }

    @Scheduled(fixedRateString = "1800000", initialDelay = 6000)
    private void checkLoginStatus() {
        if (hasLogin) {
            hasLogin = false;
            System.out.println(hasLogin);
        }
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/api/getLoginStatus", method = RequestMethod.GET)
    public Map<String, Boolean> getLoginStatus() throws Exception {
        Map<String, Boolean> map = new HashMap<>();
        map.put("LoginStatus", hasLogin);
        return map;
    }
}
