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


import com.cl.dao.QucandianDao;
import com.cl.entity.QucandianEntity;
import com.cl.service.QucandianService;
import com.cl.entity.view.QucandianView;

@Service("qucandianService")
public class QucandianServiceImpl extends ServiceImpl<QucandianDao, QucandianEntity> implements QucandianService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<QucandianEntity> page = this.selectPage(
                new Query<QucandianEntity>(params).getPage(),
                new EntityWrapper<QucandianEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<QucandianEntity> wrapper) {
		  Page<QucandianView> page =new Query<QucandianView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<QucandianView> selectListView(Wrapper<QucandianEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public QucandianView selectView(Wrapper<QucandianEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
