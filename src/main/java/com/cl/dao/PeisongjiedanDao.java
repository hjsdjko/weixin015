package com.cl.dao;

import com.cl.entity.PeisongjiedanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PeisongjiedanView;


/**
 * 配送接单
 * 
 * @author 
 * @email 
 * @date 2024-03-30 10:32:13
 */
public interface PeisongjiedanDao extends BaseMapper<PeisongjiedanEntity> {
	
	List<PeisongjiedanView> selectListView(@Param("ew") Wrapper<PeisongjiedanEntity> wrapper);

	List<PeisongjiedanView> selectListView(Pagination page,@Param("ew") Wrapper<PeisongjiedanEntity> wrapper);
	
	PeisongjiedanView selectView(@Param("ew") Wrapper<PeisongjiedanEntity> wrapper);
	

}
