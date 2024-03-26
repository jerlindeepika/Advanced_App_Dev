package com.job.search.service;

import java.util.List;

import com.job.search.dto.request.SiteRequest;
import com.job.search.dto.response.SiteResponse;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

}
