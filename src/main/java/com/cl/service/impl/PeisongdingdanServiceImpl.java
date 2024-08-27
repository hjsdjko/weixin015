package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.PeisongdingdanDao;
import com.cl.entity.PeisongdingdanEntity;
import com.cl.service.PeisongdingdanService;
import com.cl.entity.view.PeisongdingdanView;

@Service("peisongdingdanService")
public class PeisongdingdanServiceImpl extends ServiceImpl<PeisongdingdanDao, PeisongdingdanEntity> implements PeisongdingdanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<PeisongdingdanEntity> page = this.selectPage(
                new Query<PeisongdingdanEntity>(params).getPage(),
                new EntityWrapper<PeisongdingdanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<PeisongdingdanEntity> wrapper) {
		  Page<PeisongdingdanView> page =new Query<PeisongdingdanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<PeisongdingdanView> selectListView(Wrapper<PeisongdingdanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public PeisongdingdanView selectView(Wrapper<PeisongdingdanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
