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


import com.cl.dao.PeisongjiedanDao;
import com.cl.entity.PeisongjiedanEntity;
import com.cl.service.PeisongjiedanService;
import com.cl.entity.view.PeisongjiedanView;

@Service("peisongjiedanService")
public class PeisongjiedanServiceImpl extends ServiceImpl<PeisongjiedanDao, PeisongjiedanEntity> implements PeisongjiedanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<PeisongjiedanEntity> page = this.selectPage(
                new Query<PeisongjiedanEntity>(params).getPage(),
                new EntityWrapper<PeisongjiedanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<PeisongjiedanEntity> wrapper) {
		  Page<PeisongjiedanView> page =new Query<PeisongjiedanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<PeisongjiedanView> selectListView(Wrapper<PeisongjiedanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public PeisongjiedanView selectView(Wrapper<PeisongjiedanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
